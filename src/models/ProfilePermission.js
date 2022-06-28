import { Schema, model } from "mongoose";

export const ROLES = ["admin"];

const profilePermissionSchema = new Schema(
  {
    ID_PERFIL: String,
    ID_PERMISO: String,
    USR_CREACION: String,
    F_CREACION: Date,
  },
  {
    versionKey: false,
  }
);

export default model("ProfilePermission", profilePermissionSchema);
