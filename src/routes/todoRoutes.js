import express from "express";
import { body, validationResult } from "express-validator";

import getTodos from "../controllers/todos/getTodos.js";
import createTodo from "../controllers/todos/createTodo.js";
import updateTodo from "../controllers/todos/updateTodo.js";
import deleteTodo from "../controllers/todos/deleteTodo.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// ✅ Apply auth middleware to protect all routes below
router.use(authMiddleware);

// Validation middleware for creating todos
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

// ✅ Get all todos for the logged-in user
router.get("/", getTodos);

// ✅ Create a new todo for the logged-in user
router.post("/", validateTodo, createTodo);

// ✅ Update a todo (must belong to the logged-in user)
router.put("/:id", updateTodo);

// ✅ Delete a todo (must belong to the logged-in user)
router.delete("/:id", deleteTodo);

export default router;
