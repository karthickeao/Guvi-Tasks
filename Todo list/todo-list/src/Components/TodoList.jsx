import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, updateTodo, deleteTodo, filter }) => {
    return (
        <div>
            {todos.filter(todo => {
                if(filter === 'both') return true;
                return todo.status === filter;
            }).map(todo => (
                <TodoItem key={todo.taskName} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            ))}
        </div>
    );
};

export default TodoList;
