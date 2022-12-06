import { DataTypes } from "sequelize";
import { sequelize } from "../configs/database.js";

export const factura = sequelize.define("factura", {
    id_factura: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cedula: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_envio: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    /*Opciones del modelo*/
    freezeTableName: true,
    timestamps: false
});