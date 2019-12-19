import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters: []
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const jsonResponse = await response.json();
      this.setState({ monsters: jsonResponse });
    } catch (error) {
      console.log(error);
    }
  }

  render () {
    return (
      <div className="App">
        <CardList monsters={ this.state.monsters } />
      </div>
    );
  }
}

export default App;
