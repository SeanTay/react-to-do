import React, {Component} from 'react'

class Form extends Component {
  render(){
    return(
      <form onSubmit ={this.handleSubmit}>
        <input type='text' placeholder="new item" />
        <input type='submit' value='Add'/>
      </form>
    )
  }
}

export default Form
