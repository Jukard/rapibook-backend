import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const libro = sequelize.define("libro",{
    isbn: {
        type: DataTypes.INTEGER,
        primaryKey: true 
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: true
    },
    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    fecha_publicacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
},{
    /*Opciones del modelo*/
    freezeTableName: true,
    timestamps: false
});
