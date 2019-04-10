import React, { Component } from "react";
import { Link } from "react-router-dom"; //part for the package
import axios from "axios"; // to send data via http to the backend

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? "completed" : ""}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? "completed" : ""}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? "completed" : ""}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/"+props.todo_id}>Edit</Link>
        </td>
    </tr>
)

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] }; // this will hold the array of the all the todos
  }

  // This is a React method that says once component is mounted...
  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/")
      .then(response => {
        this.setState({ todos: response.data }); // Went to the database and retrieved all the todos list
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  todoList() {
      return this.state.todos.map(function(currentTodo, i){
          return <Todo todo={currentTodo} key={i} />
      });
  }

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{marginTop: 20}}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsibility</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {this.todoList()}
          </tbody>
        </table>
      </div>
    );
  }
}
