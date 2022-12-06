import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const libro = sequelize.define("libro",{
    cart_item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    cart_id: {
        type: DataTypes.INTEGER,
    },

    precio: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },  

    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    },   

    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
},{
    /*Opciones del modelo*/
    freezeTableName: true,
    timestamps: false
});