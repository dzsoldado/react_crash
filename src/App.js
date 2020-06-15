import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header/Header";
import About from "./components/pages/About";


import './App.css';


class App extends React.Component{

  state = {
    todos: [
      {
        "id": 1,
        "title": "Something 1",
        "completed": false
      },
      {
        "id": 2,
        "title": "Something 2",
        "completed": false
      },
      {
        "id": 3,
        "title": "Something 3",
        "completed": false
      }
    ]
  };

  markComplete = (id)=>{
    this.setState({ todos: this.state.todos.map(todo=>{
      if(todo.id === id ){
        todo.completed = !todo.completed; 
      } 
      return todo;
    })})
  }

  delete = (id)=>{

    this.setState({ todos: this.state.todos.filter(todo=> {
      return todo.id !== id })
    })
  }

  add = (todo)=>{
    let n = [...this.state.todos]
    n.push({id:this.state.todos.length+1, title:todo, completed:false})
    this.setState({ todos: n})
  }

  render(){
    return (
      <Router>
        <div className="App">
          <div style={{padding: "0 1rem"}}>
            <Header />
            <Route exact path="/" render={props => (

                <React.Fragment>
                  <AddTodo add={this.add} />
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delete={this.delete} />
                </React.Fragment>      
              ) 
            } />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );  
  }
}
export default App;
