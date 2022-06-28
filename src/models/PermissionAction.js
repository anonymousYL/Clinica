import { Schema, model } from "mongoose";

const permissionActionSchema = new Schema(
    {
        ID_PERMISO_ACCION: String,
        DE_PERMISO_ACCION: String,
        USR_CREACION: String,
        F_CREACION: Date,
    },
    {
        versionKey: false,
    }
);

export default model("PermissionAction", permissionActionSchema);