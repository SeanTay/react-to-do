import React, {Component} from 'react'

class Todos extends Component {
  render(){
    return(
      <div>
        <p>{this.props.body}</p>
      </div>
    )
  }
}

export default Todos
