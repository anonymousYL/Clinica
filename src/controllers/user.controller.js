import User from "../models/Users";
const moment = require('moment');


export const createUser = async (req, res) => {
  try {
    const { username, password, nom_usuario, ape_usuario, email, tel_contacto, sex_usuario } = req.body;

    //const rolesFound = await Role.find({ name: { $in: roles } });
    // creating a new User
    const user = new User({
      ID_USUARIO: v4(),
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

    return res.status(200).json({
      ID_USUARIO: savedUser.ID_USUARIO,
      USERNAME: savedUser.USERNAME,
      NOM_USUARIO: savedUser.NOM_USUARIO,
      ES_USUARIO: savedUser.ES_USUARIO,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async (req, res) => {
  const users = await User.find();
  return res.json(users);
};
