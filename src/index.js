import React from 'react';
import ReactDOM from 'react-dom';

class NewItem extends React.Component {
  constructor(props){
    super()
    this.state = props
  }
  render() {
    return
      <form>
        <input type="text" value='' onChange={ e => this.change(e)} />
      </form>
  }
  change(e){
    this.setState({
      newItem: e.target.value
    })
  }
}

class List extends React.Component {
  render() {
    return (
      <div>
        <NewItem newItem=''/>
        <ul>
          {this.props.items.map( (item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

let items = [
  "learn react",
  "learn comp sci"
]

ReactDOM.render(
  <List items={items}/>,
  document.getElementById('root')
);
