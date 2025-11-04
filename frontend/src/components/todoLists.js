import React from 'react';
import TodoItem from './TodoItem';


export default function TodoList({ todos, onToggle, onDelete }) {
if (!todos.length) return <p>No todos yet — add one!</p>;


return (
<ul style={{ listStyle: 'none', padding: 0 }}>
{todos.map(todo => (
<TodoItem key={todo._id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
))}
</ul>
);
}
