import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const libro = sequelize.define("libro",{
    cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    precio_total: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
    
},{
    /*Opciones del modelo*/
    freezeTableName: true,
    timestamps: false
});