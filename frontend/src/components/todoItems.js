import React from 'react';


export default function TodoItem({ todo, onToggle, onDelete }) {
return (
<li style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: '1px solid #eee' }}>
<input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo._id, todo.completed)} />
<span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flex: 1 }}>{todo.text}</span>
<button onClick={() => onDelete(todo._id)} style={{ padding: '4px 8px' }}>Delete</button>
</li>
);
}
