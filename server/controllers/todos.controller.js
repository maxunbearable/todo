const Todo = require("../models/todos.model");

const todos = [];

exports.addTodo = async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save()
        .then(() => res.status(204).send())
        .catch((err) => res.status(500).json({ error: err.message }));
};

exports.getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 });

        try {
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.editTodo = async (req, res) => {
    try {
        const { id: todoId } = req.params;
        const todo = await Todo.findByIdAndUpdate(todoId, req.body, { new: true, runValidators: true });

        if (!todo) {
            return res.status(404).json({ msg: `No todo with id: ${todoId}` });
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const { id: todoId } = req.params;
        const todo = await Todo.findByIdAndDelete(todoId);

        if (!todo) {
            return res.status(404).json({ msg: `No todo with id: ${todoId}` });
        } else {
            res.status(204).send();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};