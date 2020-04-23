import React, { Component } from 'react';

import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchQuery: ''
    }
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const monsters = await response.json();

    this.setState({ monsters });
  }

  filterMonsters() {
    const { monsters, searchQuery } = this.state;

    return monsters.filter(monster => monster.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={ this.handleChange }
          placeholder='search monsters'/>
        <CardList monsters={ this.filterMonsters() }/>
      </div>
    );
  }
}

export default App;
