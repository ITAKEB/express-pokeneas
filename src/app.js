const express = require('express');
const {
  get_pokemon_json,
  get_pokemon_html
} = require("./controllers")

const app = express();
const PORT = 80;

app.get('/json/pokemon', get_pokemon_json)
app.get('/html/pokemon', get_pokemon_html)

app.listen(PORT, (error) => {
  if (!error)
    console.log("Server is Successfully Running, and App is listening on port " + PORT)
  else
    console.log("Error occurred, server can't start", error);
});