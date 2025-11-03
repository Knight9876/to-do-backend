import Todo from "../../models/Todo.js";

const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const newTodo = await Todo.create({ title, description });
    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

export default createTodo;
