import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (taskName && description) {
            addTodo({
                taskName,
                description,
                status: 'not completed'
            });
            setTaskName('');
            setDescription('');
        }
    }

    return (
        <div>
            <input 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                placeholder="Task Name" 
            />
            <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description" 
            />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
};

export default TodoInput;
