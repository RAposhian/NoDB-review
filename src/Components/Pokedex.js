import React from 'react'
import Pokemon from './Pokemon'

const Pokedex = (props) => {
   const pokemonCaught = props.caughtPokemon.map(e => {
      return <Pokemon key={e.id} 
      pokemon={e} 
      saveName={props.saveName}
      releasePokemon={props.releasePokemon}
      />
   })
   return (
      <div>
         <h2>Pokedex</h2>
         {pokemonCaught}
      </div>
   )
}

export default Pokedex;