import React from 'react';
import {useTodoState} from '../../context/TodoContext';

function TodoHeader() {
    const today = new Date();
    const date = today.toLocaleDateString('ko-KR', {
        year: 'numeric', month: 'long', day: 'numeric'
    });
    const day = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    const todoList = useTodoState();
    const todoLeft = todoList.filter(todo => !todo.done);

    return (
        <div className="TodoHeader">
            <h1>{date}</h1>
            <p className="day">{day}</p>
            <br/>
            <p className="description">할 일 {todoLeft.length}개 남음</p>
        </div>
    );
}

export default TodoHeader;