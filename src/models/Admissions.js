import { Schema, model } from "mongoose";
const { v4: uuidv4 } = require('uuid');

const admissionsSchema = new Schema(
  {
    ID_ADMISIONISTA: { type: String, default: uuidv4 },
    NOM_ADMISIONISTA: String, 
    APE_ADMISIONISTA: String,
    TEL_ADMISIONISTA: String,
    EMAIL: { type: String, unique: true, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    SEX_ADMISIONISTA: String,
    ID_USUARIO: String,
    F_CREACION: Date,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("admissions", admissionsSchema);


