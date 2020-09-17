import React, { Component } from "react";
import "./App.css";

import NewTask from "./Components/NewTask";
import List from "./Components/List";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: ["Eat"],
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(task) {
    this.setState({ tasks: [...this.state.tasks, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My Todo List:</h1>
        <NewTask addTodo={this.addTodo} />
        <List tasks={this.state.tasks} />
      </div>
    );
  }
}
