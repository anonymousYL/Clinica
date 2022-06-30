import { Schema, model } from "mongoose";
const { v4: uuidv4 } = require('uuid');
import bcrypt from "bcryptjs";

const userSchema = new Schema(
  {
    ID_USUARIO: { type: String, default: uuidv4 },
    USERNAME: { type: String, unique: true, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true },
    PASSWORD: String,
    NOM_USUARIO: String,
    APE_USUARIO: String,
    EMAIL: { type: String, unique: true, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    TEL_CONTACTO: String,
    SEX_USUARIO: String,
    ES_USUARIO: String,
    F_CREACION: Date,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}

export default model("User", userSchema);


