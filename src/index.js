document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  let searchForm = document.querySelector("#pokemon-search-form")
  let userInput = document.querySelector("#pokemon-search-input")
  let pokemonContainer = document.querySelector("#pokemon-container")
  POKEMON.forEach(function (p) {
    makeCard(p.name, p.sprites.front)
  });
  searchForm.addEventListener("input",function(e) {
  
    let input = userInput.value
    console.log(input)
    pokemonContainer.innerHTML = ""

    // const result = POKEMON.filter(p => p.name === input)
    const result = POKEMON.filter(p => p.name.includes(input))
    result.forEach(function (p) {
      makeCard(p.name, p.sprites.front)
    });

  })




function makeCard(name,imageURL) {
  let pokemonCard = document.createElement("div")
  pokemonCard.className = "pokemon-card"
  pokemonContainer.appendChild(pokemonCard)
  let pokemonFrame = document.createElement("div")
  pokemonFrame.className = "pokemon-frame"
  pokemonCard.appendChild(pokemonFrame)
  let pokemonName = document.createElement("h1")
  pokemonName.innerText = name
  pokemonName.className = "center-text"
  pokemonFrame.appendChild(pokemonName)
  let pokemonImage = document.createElement("div")
  pokemonImage.className = "pokemon-image"
  pokemonFrame.appendChild(pokemonImage)
  let image = document.createElement("img")
  image.src = imageURL
  image.className = "toggle-sprite"
  pokemonImage.appendChild(image)
}


})
