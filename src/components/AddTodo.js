import React, { Component } from 'react'

export class AddTodo extends Component {
  
  submit = (e)=>{
    e.preventDefault();
    this.props.add(e.target.newTodo.value)
    e.target.newTodo.value= ""
  }
  render() {
    return (
      <form onSubmit={this.submit} style={{display: "flex"}}>
        <input type="text" name="newTodo" id="newTodo" placeholder="Add new todo" style={{flex:"3"}} />
        <input type="submit" value="Submit" className="btn" style={{flex:"1"}}/>
      </form>
    )
  }
}

export default AddTodo
