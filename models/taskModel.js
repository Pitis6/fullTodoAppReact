const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: String,
  isDone: Boolean,
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;
