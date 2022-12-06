import app from "./app.js";
import { sequelize } from "./configs/database.js";

import "./models/autor.js";
import "./models/libro.js";


/* Test de conexión a Railway */
const main = async () => {
    try{
        await sequelize.sync({ alter: true});
        app.listen(5000)
        console.log("El servidor eschcha en el puerto",5000);
      } catch (error) {
        console.error('No se puede conectar a la base de datos:', error);
      }
}
main();