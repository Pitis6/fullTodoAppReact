const express = require("express");
const userRouter = express();
const userModel = require("../models/userModel");

userRouter
  .get("/", async (req, res) => {
    const users = await userModel.find();
    res.json(users);
  })
  .get("/:id", async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json(`El usuario con id ${id} no fue encontrado`);
    }
  })
  .post("/", (req, res) => {
    const reqUser = req.body;
    const newUser = new userModel(reqUser);
    newUser.save();
    res.status(200).json(`Usuario ${newUser.username} creado exitosamente`);
  })
  .put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedFields = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { $set: updatedFields },
      { new: true } // Devuelve el documento actualizado
    );
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json(`El usuario con id ${id} no fue encontrado`);
    }
  })
  .delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedUser = await userModel.findByIdAndDelete(id);
    if (deletedUser) {
      res
        .status(200)
        .json(
          `El usuario con id ${id} fue borrada respuesta del servidor ${deletedUser}`
        );
    } else {
      res.status(404).json(`El usuario con ${id} no fue borrada`);
    }
  });

module.exports = userRouter;
