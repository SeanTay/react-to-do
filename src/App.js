import React, {Component} from 'react'
import Form from './Form.js'
import Todos from './Todos.js'


class TodoApp extends Component {

  // constructor (props) {
  //   super()
  //   this.state = {
  //     todos: []
  //   }
  // }

  // updateItems (newItem) {
  //   var allItems = this.state.todos.concat([newItem]);
  //   this.setState({items: allItems});
  // }

  render(){
    let todos = this.props.todos.map((todo, index) => (
      <Todos body = {todo} key={index} />
    ))
    return(
      <div>
        <h1>Todo App using React</h1>
        {todos}
        <Form />
      </div>
    )
  }
}

export default TodoApp
