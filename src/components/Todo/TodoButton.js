import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';

import TodoForm from './TodoForm';

const CircleButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;

    position: absolute;
    bottom: -32px;

    width: 64px;
    height: 64px;

    box-shadow: 0 0 8px 0 rgba(0,0,0, .2);
    border-radius: 50%;
    border: none;
    outline: none;
    background: #00e676;
    font-size: 32px;
    color: white;

    &:hover{
        background: #63e6be;
    }
    &:active{
        background: #20c997;
    }
    z-index: 5;
    cursor: pointer;
    transition: 0.125s all ease-in;

    ${props => 
        props.open &&
        css`
            background: #ff6b6b;
            &:hover{
                background: #ff8787;
            }
            &:active{
                background: #fa5252;
            }
            transform: translate(0, 60%) rotate(45deg);
        `
    }
`;

function TodoButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {open &&
                <TodoForm/>
            }
            <CircleButton open={open} onClick={() => setOpen(!open)}>
                <MdAdd/>
            </CircleButton>
        </>
    )
}

export default TodoButton
