const router = require("express").Router();
const { getAllTodos, editTodo, addTodo, deleteTodo } = require("../controllers/todos.controller");

router.get("/todos", getAllTodos);
router.post("/todos", addTodo);
router.put("/todo/:id", editTodo);
router.delete("/todo/:id", deleteTodo);

module.exports = router;