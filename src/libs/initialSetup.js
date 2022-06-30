import GroupAction from "../models/GroupAction";
import GroupActionJS from "../models/data/GroupAction.json";
import PermissionAction from "../models/PermissionAction";
import Permission from "../models/Permission";
import Profile from "../models/Profile";
import ProfilePermission from "../models/ProfilePermission";
import Users from "../models/Users";
import UsersProfile from "../models/UsersProfile";


import bcrypt from "bcryptjs";

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

    /* // Create default Roles
    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]); */

  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  // check for an existing admin user
  const user = await User.findOne({ email: "admin@localhost" });
  // get roles _id
  const roles = await Role.find({ name: { $in: ["admin", "moderator"] } });

  if (!user) {
    // create a new admin user
    await User.create({
      username: "admin",
      email: "admin@localhost",
      password: await bcrypt.hash("admin", 10),
      roles: roles.map((role) => role._id),
    });
    console.log('Admin User Created!')
  }
};
