import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const dir_envio = sequelize.define("dir_envio", {
    id_envio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cedula: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },

    ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    /*Opciones del modelo*/
    freezeTableName: true,
    timestamps: false
});