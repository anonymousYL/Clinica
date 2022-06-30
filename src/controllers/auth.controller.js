import User from "../models/Users";

const { v4: uuidv4 } = require('uuid');


import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  try {
    const { username, password, nom_usuario, ape_usuario, email, tel_contacto, sex_usuario } = req.body;

    //const rolesFound = await Role.find({ name: { $in: roles } });
    // creating a new User
    const user = new User({
      ID_USUARIO: uuidv4(),
      USERNAME: username,
      PASSWORD: await User.encryptPassword(password),
      NOM_USUARIO: nom_usuario,
      APE_USUARIO: ape_usuario,
      EMAIL: email,
      TEL_CONTACTO: tel_contacto,
      SEX_USUARIO: sex_usuario,
      ES_USUARIO: "ACTIV",
      F_CREACION: moment().format("YYYY-MM-DD HH:mm:ss"),
    });

    // saving the new user
    const savedUser = await user.save();

    // Create a token
    const token = jwt.sign({ id: savedUser.ID_USUARIO }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const signin = async (req, res) => {
  try {
    // Request body email can be an email or username
    const userFound = await User.findOne({ username: req.body.username })
    /* const userFound = await User.findOne({ username: req.body.username }).populate(
      "roles"
    );
 */
    if (!userFound) return res.status(400).json({ message: "User Not Found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    const token = jwt.sign({ id: userFound.ID_USUARIO }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};