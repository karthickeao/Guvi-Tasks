import React, { useState } from 'react';
import TodoInput from './Components/TodoInput';
import TodoItem from './Components/TodoItem';
import './App.css';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('both'); 

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const updateTodo = (updatedTodo) => {
        setTodos(todos.map(todo => todo.taskName === updatedTodo.taskName ? updatedTodo : todo));
    };

    const deleteTodo = (deleteTodo) => {
        setTodos(todos.filter(todo => todo.taskName !== deleteTodo.taskName));
    };

    return (
        <div className="App">
            <h2>Todo App</h2>
            
            <TodoInput addTodo={addTodo} />
            
            <hr /> {/* This is the line break */}

            <div className="filters">
                <button onClick={() => setFilter('both')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('not completed')}>Not Completed</button>
            </div>

            <div className="todo-list-container">
                {todos
                    .filter(todo => {
                        if (filter === 'both') return true;
                        return todo.status === filter;
                    })
                    .map((todo, index) => (
                        <TodoItem 
                            key={index} 
                            todo={todo} 
                            updateTodo={updateTodo} 
                            deleteTodo={deleteTodo} 
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default App;
