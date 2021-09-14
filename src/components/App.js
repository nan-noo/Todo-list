import React from 'react';
import {AiOutlineSmile} from 'react-icons/ai';
import Wrapper from './Wrapper/Wrapper';
import TodoHeader from './Todo/TodoHeader';
import TodoList from './Todo/TodoList';
import TodoButton from './Todo/TodoButton';
import './Todo/Todo.css';

import TodoProvider from '../context/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Wrapper>
          <TodoHeader/>
          <TodoList/>
          <TodoButton/>
        </Wrapper>
      </TodoProvider>
      <footer>nannoo<AiOutlineSmile/></footer>
    </div>

  );
}

export default App;
