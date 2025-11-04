import Todo from "../../models/Todo.js";

const deleteTodo = async (req, res, next) => {
  try {
    // Only delete if it belongs to the logged-in user
    const deleted = await Todo.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Todo not found or unauthorized" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export default deleteTodo;
