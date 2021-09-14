import React from 'react';
import {useTodoState} from '../../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList() {
    const todoList = useTodoState();

    return (
        <div className="TodoList">
            {todoList.map(todo => (
                <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text} 
                    done={todo.done}/>
            ))}
        </div>
    );
}

export default TodoList;