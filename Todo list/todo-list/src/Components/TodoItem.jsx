import React, { useState } from 'react';

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [tempTodo, setTempTodo] = useState(todo);

    const handleStatusChange = (event) => {
        const updatedStatus = event.target.value;
        updateTodo({ ...todo, status: updatedStatus });
    };

    return (
        <div className="todo-card">
            {isEditing ? (
                <>
                    <input 
                        value={tempTodo.taskName} 
                        onChange={(e) => setTempTodo({ ...tempTodo, taskName: e.target.value })} 
                    />
                    <textarea 
                        value={tempTodo.description}
                        onChange={(e) => setTempTodo({ ...tempTodo, description: e.target.value })}
                    />
                    <select value={tempTodo.status} onChange={handleStatusChange}>
                        <option value="completed">Completed</option>
                        <option value="not completed">Not Completed</option>
                    </select>
                    <button onClick={() => { setIsEditing(false); updateTodo(tempTodo); }}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <h3>{todo.taskName}</h3>
                    <p>{todo.description}</p>
                    <select value={todo.status} onChange={handleStatusChange}>
                        <option value="completed">Completed</option>
                        <option value="not completed">Not Completed</option>
                    </select>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => deleteTodo(todo)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default TodoItem;
