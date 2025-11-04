const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');


// GET /api/todos - list all todos
router.get('/', async (req, res) => {
try {
const todos = await Todo.find().sort({ createdAt: -1 });
res.json(todos);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// POST /api/todos - create new todo
router.post('/', async (req, res) => {
try {
const { text } = req.body;
if (!text) return res.status(400).json({ error: 'Text is required' });
const todo = new Todo({ text });
await todo.save();
res.status(201).json(todo);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// PUT /api/todos/:id - update (partial) a todo
router.put('/:id', async (req, res) => {
try {
const { id } = req.params;
const updates = req.body;
const todo = await Todo.findByIdAndUpdate(id, updates, { new: true });
if (!todo) return res.status(404).json({ error: 'Todo not found' });
res.json(todo);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// DELETE /api/todos/:id - delete a todo
router.delete('/:id', async (req, res) => {
try {
const { id } = req.params;
const todo = await Todo.findByIdAndDelete(id);
if (!todo) return res.status(404).json({ error: 'Todo not found' });
res.json({ message: 'Deleted' });
} catch (err) {
res.status(500).json({ error: err.message });
}
});


module.exports = router;
