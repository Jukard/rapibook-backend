import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const cliente = sequelize.define("cliente",{
    cedula: {
        type: DataTypes.INTEGER,
        primaryKey: true 
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
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
},{
    /*Opciones del modelo*/
    freezeTableName: true,
    timestamps: false
});