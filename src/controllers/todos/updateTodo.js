import Todo from "../../models/Todo.js";

const updateTodo = async (req, res, next) => {
  try {
    const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) return res.status(404).json({ message: "Todo not found" });
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export default updateTodo;
