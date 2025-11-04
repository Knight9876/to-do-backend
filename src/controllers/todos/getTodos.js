import Todo from "../../models/Todo.js";

const getTodos = async (req, res, next) => {
  try {
    // Only fetch todos for this user
    const todos = await Todo.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export default getTodos;
