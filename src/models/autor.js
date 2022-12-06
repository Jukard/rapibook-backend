import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const autor = sequelize.define("autor",{
    id_autor: {
        type: DataTypes.STRING,
        primaryKey: true 
    },
    isbn: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    /*Opciones del modelo*/
    freezeTableName: true,
    timestamps: false
});