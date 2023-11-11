const mongoose = require("mongoose");

async function conectDb(req, res, next) {
  try {
    await mongoose.connect(
      "mongodb+srv://Pitis6:kwPJMppLa7WYipof@e-comercev1.h68k36b.mongodb.net/?retryWrites=true&w=majority",
      { dbName: "TodoApp" }
    );
    console.log("Coneccion exitosa 👌");
    next();
  } catch (error) {
    console.error("Error:", error);
  }
}

module.exports = conectDb;
