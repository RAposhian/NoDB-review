import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Finder from './Components/Finder'
import Pokedex from './Components/Pokedex'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caughtPokemon: []
    }
  }
  
  componentDidMount() {
    axios.get('/api/pokemon')
    .then(res => {
      this.setState({caughtPokemon: res.data})
      
    })
    .catch(err => console.log(err))
  }

  catchPokemon = (pokemon) => {
    axios.post(`/api/pokemon`, {pokemon})
    .then(res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err))
  }

  saveName = (id, newName) => {
    axios.put(`/api/pokemon/${id}`, {name: newName})
    .then(res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err))
  }

  releasePokemon = (id) => {
    axios.delete(`/api/pokemon/${id}`)
    .then(res => {
      this.setState({caughtPokemon: res.data})
    })
    .catch(err => console.log(err))
  }

  render(){
  return (
    <div className="App">
      <Header />
      <Finder catchPokemon={this.catchPokemon}/>
      <Pokedex 
      caughtPokemon={this.state.caughtPokemon}
      saveName={this.saveName}
      releasePokemon={this.releasePokemon}
      />
    </div>
  );
  }
}

export default App;
