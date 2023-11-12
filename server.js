const express = require("express");
const conectDb = require("./utils/dbConection");
const userRouter = require("./routes/users");
const tasksRouter = require("./routes/tasks");
const authRouter = require("./routes/auth");
const { validateToken } = require("./utils/jwt");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", validateToken, conectDb, userRouter);
app.use("/tasks", validateToken, conectDb, tasksRouter);
app.use("/auth", conectDb, authRouter);

const server = app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port} 🚀...`);
});
