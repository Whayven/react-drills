import React, { Component } from "react";

export default class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleInput(val) {
    this.setState({ input: val });
  }

  addTodo() {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={(e) => this.handleInput(e.target.value)}
        />
        <button onClick={this.addTodo}>Add</button>
      </div>
    );
  }
}
