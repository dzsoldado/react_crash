import React, { Component } from 'react'
import PropTypes from "prop-types"

export class TodoItem extends Component {
  
  todoStyle = ()=>{
    return {
      fontSize: "20px",
      color: this.props.todo.completed? "green" : "red",
      backgroundColor: "#f2f2f2",
      padding: "5px",
      borderBottom: "1px #aaa solid"
    }
  }


  render() {

    const {id, title} = this.props.todo;
    return (
      <div style={this.todoStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
          {title}
          <button style={btnStyle} onClick={this.props.delete.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

const btnStyle= {
  padding: "5px 9px",
  color: "white",
  backgroundColor: "#f00",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
}


// proptypes
TodoItem.protoTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem

