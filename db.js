// db.js
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1/Negocio2024";

mongoose.connect(url).then(() => {
  console.log("Conectado a la base de datos MongoDB");
}).catch((err) => {
  console.log("Error al conectar a MongoDB: " + err);
});

module.exports = mongoose;
