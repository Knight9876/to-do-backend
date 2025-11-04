import Todo from "../../models/Todo.js";

const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    // Create todo belonging to the logged-in user
    const newTodo = await Todo.create({
      title,
      description,
      completed: false,
      userId: req.user.id, // ✅ associate with current user
    });

    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
};

export default createTodo;
