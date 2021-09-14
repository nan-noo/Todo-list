import React, {useState} from 'react';
import styled from 'styled-components';
import {useTodoState, useTodoDispatch} from '../../context/TodoContext';

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;

    position: absolute;
    bottom: 0;
    border-top: 1px solid #e0e0e0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    background: #f1f7e4;
`;

const Input = styled.input`
    width: 80%;
    padding: 2px 10px;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    outline: none;
    font-size: 16px;
`;

function TodoForm() {
    const [input, setInput] = useState('');

    return (
        <Form>
            <Input autoFocus placeholder="일정을 작성하고, Enter를 눌러 주세요." value={input} onChange={(e) => setInput(e.target.value)}/>
        </Form>
    )
}

export default TodoForm
