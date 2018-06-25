import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Olá, este será um pequeno
            exercício de autenticação.
          </h1>
        </header>
        <div className="center">
          <div className="card">
              <h1>Login</h1>
              <form>
                  <input
                      className="form-item"
                      placeholder="Username goes here..."
                      name="username"
                      type="text"
                      onChange={this.handleChange}
                  />
                  <input
                      className="form-item"
                      placeholder="Password goes here..."
                      name="password"
                      type="password"
                      onChange={this.handleChange}
                  />
                  <input
                      className="form-submit"
                      value="SUBMIT"
                      type="submit"
                  />
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
