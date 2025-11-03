import express from "express";
import { body, validationResult } from "express-validator";

import getTodos from "../../controllers/todos/getTodos.js";
import createTodo from "../../controllers/todos/createTodo.js";
import updateTodo from "../../controllers/todos/updateTodo.js";
import deleteTodo from "../../controllers/todos/deleteTodo.js";

const router = express.Router();

// Validation middleware for create route
const validateTodo = [
  body("title").notEmpty().withMessage("Title is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// CRUD routes
router.get("/", getTodos);
router.post("/", validateTodo, createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
