const express = require("express");
const conectDb = require("./dbConection");
const userRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");
const app = express();
const port = 3000;


app.use(express.json())

app.use("/users", conectDb, userRouter);
app.use("/tasks", conectDb, tasksRouter);

app.get("/", async (req, res) => {});

const server = app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port} 🚀...`);
});
