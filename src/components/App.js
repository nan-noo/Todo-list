import React from 'react';
import Wrapper from './Wrapper/Wrapper';
import TodoHeader from './Todo/TodoHeader';
import TodoList from './Todo/TodoList';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <TodoHeader/>
        <TodoList/>
      </Wrapper>
    </div>
  );
}

export default App;
