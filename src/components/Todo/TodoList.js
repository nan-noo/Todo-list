import React from 'react';
import TodoItem from './TodoItem';

function TodoList() {
    return (
        <div className="TodoList">
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>
        </div>
    );
}

export default TodoList;