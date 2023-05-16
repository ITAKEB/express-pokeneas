const {
    render_html
} = require("./view")

const os = require("os")
const data = require("./constants")

function get_pokemon_json(req, res) {
    const index = Math.floor(Math.random() * data.size)

    let pokemon = data.pokemons[index]
    pokemon.container_id = os.hostname()

    res.json(pokemon)
}

function get_pokemon_html(req, res) {
    const index = Math.floor(Math.random() * data.size)

    let pokemon = data.pokemons[index]
    pokemon.container_id = os.hostname()

    res.send(render_html(pokemon))
}

module.exports = {
    get_pokemon_json,
    get_pokemon_html,
}