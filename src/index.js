import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './App.js';
import Form from './Form.js'

const todo = {
  body: [
    "item1",
    "item2",
    "item3"
  ]
}

ReactDOM.render(
  <TodoApp
    todos={todo.body}/>,

  document.getElementById('root')
);
