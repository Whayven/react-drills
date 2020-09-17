import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  updateUsername(val) {
      this.setState({ username: val })
  }

  updatePassword(val) {
      this.setState({ password: val })
  }

  login() {
      alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  render() {
      return (
          <div>
              <input onChange={(e) => this.updateUsername(e.target.value)} />
              <input onChange={(e) => this.updatePassword(e.target.value)} />
              <button onClick={() => this.login()}>Login</button>
          </div>
      )
  }
}
