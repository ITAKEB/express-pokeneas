function render_html(pokemon) {
  return `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Pokemon</title>
            </head>
            <body>
              <h1>${pokemon.name} in pokeball ${pokemon.container_id}</h1>
              <img src="${pokemon.image}" alt="${pokemon.name}" width="350" height="350">
              <br/>
              <h3>Philosophy: </h3>
              <p>${pokemon.sentence}</p>
            </body>
          </html>`
}

module.exports = {
  render_html,
}