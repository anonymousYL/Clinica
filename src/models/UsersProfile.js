import { Schema, model } from "mongoose";

const userProfileSchema = new Schema(
  {
    ID_USUARIO: String,
    ID_PELFIL: String,
    USR_CREACION: String,
    F_CREACION: Date,
  },
  {
    timestamps: true,
    versionKey: false
  }
);


export default model("UserProfile", userProfileSchema);
