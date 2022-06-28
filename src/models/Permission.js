import { Schema, model } from "mongoose";

const permissionSchema = new Schema(
  {
    ID_PERMISO: String,
    DE_PERMISO: String,
    ID_PERMISO_ACCION: String,
    ID_ACCION_GRUPO: String,
    USR_CREACION: String,
    F_CREACION: Date,
  },
  {
    versionKey: false,
  }
);

export default model("Permission", permissionSchema);
