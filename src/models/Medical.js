import { Schema, model } from "mongoose";
const { v4: uuidv4 } = require('uuid');

const medicalSchema = new Schema(
  {
    ID_MEDICO: { type: String, default: uuidv4 },
    NOM_MEDICO: String,
    APE_MEDICO: String,
    TEL_MEDICO: String,
    EMAIL: { type: String, unique: true, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    SEX_MEDICO: String,
    ID_USUARIO: String,
    F_CREACION: Date,
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Medical", medicalSchema);


