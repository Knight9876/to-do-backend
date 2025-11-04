import Todo from "../../models/Todo.js";

const updateTodo = async (req, res, next) => {
  try {
    // Ensure only the owner can update the todo
    const updated = await Todo.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ message: "Todo not found or unauthorized" });
    }

    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export default updateTodo;
