import { Schema, model } from "mongoose";

const groupActionSchema = new Schema(
    {
        ID_ACCION_GRUPO: String,
        DE_ACCION_GRUPO: String,
        USR_CREACION: String,
        F_CREACION: Date,
    },
    {
        versionKey: false,
    }
);

export default model("GroupAction", groupActionSchema);