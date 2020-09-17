import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      tasks: ["Eat", "Sleep"],
    };
  }

  handleInput(val) {
    this.setState({ input: val });
  }

  addTodo(todo) {
    this.setState({
      tasks: [...this.state.tasks, todo],
      input: "",
    });
  }

  render() {
    const todos = this.state.tasks.map((el, i) => {
      return <Todo key={i} task={el} />;
    });
    return (
      <div className="App">
        <h1>My Todo List:</h1>
        <input
          value={this.state.input}
          onChange={(e) => this.handleInput(e.target.value)}
        />
        <button onClick={() => this.addTodo(this.state.input)}>Add</button>
        <br />
        {todos}
      </div>
    );
  }
}

export default App;
