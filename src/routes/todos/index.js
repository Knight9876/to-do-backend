import express from "express";
import getTodos from "../../controllers/todos/getTodos.js";
import createTodo from "../../controllers/todos/createTodo.js";
import updateTodo from "../../controllers/todos/updateTodo.js";
import deleteTodo from "../../controllers/todos/deleteTodo.js";

const router = express.Router();

// CRUD routes
router.get("/", getTodos);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
