import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const categoria = sequelize.define("categoria",{
    id_categoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true 
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    /*Opciones del modelo*/
    freezeTableName: true,
    timestamps: false
});