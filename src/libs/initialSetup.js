import GroupAction from "../models/GroupAction";
import GroupActionJS from "../models/data/GroupAction.json";
import PermissionAction from "../models/PermissionAction";
import PermissionActionJS from "../models/data/PermissionAction.json";
import Permission from "../models/Permission";
import PermissionJS from "../models/data/Permission.json";
import Profile from "../models/Profile";
import ProfileJS from "../models/data/Profile.json";
import ProfilePermission from "../models/ProfilePermission";
import ProfilePermissionJS from "../models/data/ProfilePermission.json";
import Users from "../models/Users";
import UsersProfile from "../models/UsersProfile";
import UsersProfileJS from "../models/data/UsersProfile.json";

const moment = require("moment");


//import bcrypt from "bcryptjs";

export const createGroupAction = async () => {
  try {
    // Count Documents
    const count = await GroupAction.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    const records = JSON.parse(JSON.stringify(GroupActionJS));

    GroupAction.insertMany(records)
      .then((result) => {
        console.log("result ", result);
        console.log(res.status(200).json({ 'success': 'new documents added!', 'data': result }));
      })
      .catch(err => {
        console.error("error ", err);
        console.log(res.status(400).json({ err }));
      });



  } catch (error) {
    console.error(error);
  }
};

export const createPermissionAction = async () => {
  try {
    // Count Documents
    const count = await PermissionAction.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    const records = JSON.parse(JSON.stringify(PermissionActionJS));

    PermissionAction.insertMany(records)
      .then((result) => {
        console.log("result ", result);
        console.log(res.status(200).json({ 'success': 'new documents added!', 'data': result }));
      })
      .catch(err => {
        console.error("error ", err);
        console.log(res.status(400).json({ err }));
      });

  } catch (error) {
    console.error(error);
  }
};

export const createPermission = async () => {
  try {
    // Count Documents
    const count = await Permission.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    const records = JSON.parse(JSON.stringify(PermissionJS));

    Permission.insertMany(records)
      .then((result) => {
        console.log("result ", result);
        console.log(res.status(200).json({ 'success': 'new documents added!', 'data': result }));
      })
      .catch(err => {
        console.error("error ", err);
        console.log(res.status(400).json({ err }));
      });

  } catch (error) {
    console.error(error);
  }
};

export const createProfile = async () => {
  try {
    // Count Documents
    const count = await Profile.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    const records = JSON.parse(JSON.stringify(ProfileJS));

    Profile.insertMany(records)
      .then((result) => {
        console.log("result ", result);
        console.log(res.status(200).json({ 'success': 'new documents added!', 'data': result }));
      })
      .catch(err => {
        console.error("error ", err);
        console.log(res.status(400).json({ err }));
      });

  } catch (error) {
    console.error(error);
  }
};

export const createProfilePermission = async () => {
  try {
    // Count Documents
    const count = await ProfilePermission.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    const records = JSON.parse(JSON.stringify(ProfilePermissionJS));

    ProfilePermission.insertMany(records)
      .then((result) => {
        console.log("result ", result);
        console.log(res.status(200).json({ 'success': 'new documents added!', 'data': result }));
      })
      .catch(err => {
        console.error("error ", err);
        console.log(res.status(400).json({ err }));
      });

  } catch (error) {
    console.error(error);
  }
};

export const createUserinitial = async () => {

  try {
    // Count Documents
    const count = await Users.estimatedDocumentCount();

    if (count > 0) return;
    // create a new admin user

    await Users.create(
      {
        ID_USUARIO: "d85f9337-809a-4633-b292-c75c5c11ecf4",
        USERNAME: "admin",
        PASSWORD: await Users.encryptPassword("admin123"),
        NOM_USUARIO: "Super",
        APE_USUARIO: "Administrador",
        EMAIL: "admin@admin.com",
        TEL_CONTACTO: "",
        SEX_USUARIO: "SEX-M",
        ES_USUARIO: "ACTIV",
        F_CREACION: moment().format("YYYY-MM-DD HH:mm:ss"),
      }
    )
    console.log('Admin User Created!')
  } catch (error) {
    console.error(error);
  }
};

export const createUsersProfile = async () => {
  try {
    // Count Documents
    const count = await UsersProfile.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    const records = JSON.parse(JSON.stringify(UsersProfileJS));

    UsersProfile.insertMany(records)
      .then((result) => {
        console.log("result ", result);
        console.log(res.status(200).json({ 'success': 'new documents added!', 'data': result }));
      })
      .catch(err => {
        console.error("error ", err);
        //console.log(res.status(400).json({ err }));
      });

  } catch (error) {
    console.error(error);
  }
};

/* export const createAdmin = async () => {
  // check for an existing admin user
  const user = await Users.findOne({ email: "admin@localhost" });
  // get roles _id
  const roles = await Role.find({ name: { $in: ["admin", "moderator"] } });

  if (!user) {
    // create a new admin user
    await Users.create({
      username: "admin",
      email: "admin@localhost",
      password: await bcrypt.hash("admin", 10),
      roles: roles.map((role) => role._id),
    });
    console.log('Admin User Created!')
  }
}; */
