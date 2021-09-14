import React from 'react';
import styled, {css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import {useTodoDispatch} from '../../context/TodoContext';

const CheckCircle = styled.div`
    width: 24px;
    height: 24px;

    border-radius: 20px;
    border: 1px solid #8d8d8d;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${props => 
        props.done &&
        css`
            border: 1px solid #00e676;
            color: #00e676;
        `
    }
`;

const TodoText = styled.div`
    flex: 1;
    margin-left: 15px;
    ${props =>
        props.done &&
        css`
            color: #e0e0e0;
        `
    }
`;

const Remove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e0e0e0;
    cursor: pointer;
    &:hover{
        color: #f93125;
    }
    display: none;
`;

const Item = styled.div`
    display: flex;

    margin: 5px 0;
    padding: 5px 0;

    font-size: 20px;
    &:hover{
        ${Remove}{
            display: initial;
        }
    }
`;

function TodoItem({id, text, done}) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type: 'TOGGLE', id});
    const onRemove = () => dispatch({type: 'REMOVE', id});

    return (
        <Item>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone/>}</CheckCircle>
            <TodoText done={done}>{text}</TodoText>
            <Remove onClick={onRemove}><MdDelete/></Remove>
        </Item>
    );
}

export default React.memo(TodoItem);