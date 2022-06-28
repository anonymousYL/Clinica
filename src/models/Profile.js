import { Schema, model } from "mongoose";

export const ROLES = ["admin"];

const profileSchema = new Schema(
  {
    ID_PERFIL: String,
    DE_PERFIL: String,
    ES_PERFIL: String,
    USR_CREACION: String,
    F_CREACION: Date,
  },
  {
    versionKey: false,
  }
);

export default model("Profile", profileSchema);
