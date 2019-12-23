import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor () {
    super();

    this.state = {
      monsters: [],
      searchField: ''
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

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render () {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <SearchBox placeholder="search monsters" handleChange={ this.handleChange }></SearchBox>
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
