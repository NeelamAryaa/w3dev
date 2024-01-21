// src/index.ts
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import { getAllToDos } from "./controllers/todoControllers";
import {
  getAllToDos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./controllers/todoControllers";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://root:root@cluster0.uphghdj.mongodb.net/");

app.get("/todos", getAllToDos);
app.post("/todos", addTodo);
app.put("/todos/:id", updateTodo);
app.delete("/todos/:id", deleteTodo);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
