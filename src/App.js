import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      welcomeLabel: 'Changed src/App.js to class instead of function.'
    }
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.welcomeLabel}
          </p>
          <button onClick={() => this.setState({welcomeLabel: 'Also added state.'})}>
            Change text!
          </button>
        </header>
      </div>
    );
  }
}

export default App;
