import React from 'react';

import './Todo/Todo.css';
import Wrapper from './Wrapper/Wrapper';
import TodoHeader from './Todo/TodoHeader';
import TodoList from './Todo/TodoList';
import TodoButton from './Todo/TodoButton';

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
    </div>

  );
}

export default App;
