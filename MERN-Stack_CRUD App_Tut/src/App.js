import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/list-todo.component";

import logo from "./icons8-menu-64.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{marginBottom: 20}}>
            <a className="navbar-brand" href="/">
              <img src={logo} width="30px" alt="ToDo List" /> 
            </a>
            <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
            <div className="navbar navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul> 
            </div>
          </nav>
         
          <Route path="/" exact component={TodosList} />{" "}
          <Route path="/edit/:id" component={EditTodo} />{" "}
          <Route path="/create" component={CreateTodo} />{" "}
        
        </div>
      </Router>
    );
  }
}

export default App;
