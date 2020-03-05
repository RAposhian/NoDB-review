import React, { Component } from 'react'
import Grass from './Grass'
import axios from 'axios'

class Finder extends Component {
   constructor(props){
      super(props);

      this.state = {
         wildPokemon: []
      }
      this.componentDidMount = this.componentDidMount.bind(this);
   }
   
   componentDidMount(){
      axios.get(`/api/wild-pokemon`)
      .then(res => {
         this.setState({wildPokemon: res.data})
      })
      .catch(err => console.log(err))
   }
   
   render() {
      const pokemonList = this.state.wildPokemon.map(e => {
         return <Grass 
                  key={e.id} 
                  pokemon={e} 
                  refreshFn={this.componentDidMount}
                  catchPokemon={this.props.catchPokemon}
                />
      })
      return (
         <div className="finder-box">
            {pokemonList}
         </div>
      )
   }
}

export default Finder