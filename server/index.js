const express = require('express'),
      port = 8888,
      app = express(),
      cors = require('cors'),
      grassController = require('./controllers/grassController'),
      pokemonController = require('./controllers/pokemonController')

app.use(cors())
app.use(express.json())

app.get('/api/wild-pokemon', grassController.getWildPokemon);
app.get(`/api/pokemon`, pokemonController.getCaughtPokemon);
app.post(`/api/pokemon`, pokemonController.catchPokemon);
app.put(`/api/pokemon/:id`, pokemonController.editPokemonName)
app.delete(`/api/pokemon/:id`, pokemonController.releasePokemon)


app.listen(port, ()=> console.log(`Server running on port: ${port}`))