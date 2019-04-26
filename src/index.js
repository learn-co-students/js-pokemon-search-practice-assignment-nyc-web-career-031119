document.addEventListener('DOMContentLoaded', () => {
  const pokemonContainer = document.querySelector("#pokemon-container")
  const pokeInput = document.getElementById("pokemon-search-input")
  pokemonContainer.innerHTML = ``
  function renderPokemon(array){
  array.forEach(function(pokemon){
     pokemonContainer.innerHTML += `<div class="pokemon-card">
  <div class="pokemon-frame">
    <h1 class="center-text">${pokemon.name}</h1>
    <div class="pokemon-image">
      <img data-id=${pokemon.id} data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
    </div>
  </div>
</div>`
  })
}
  pokeInput.addEventListener('input', function(e){
    pokemonContainer.innerHTML = ``
    let search = e.target.value
    let filterdPokemon = POKEMON.filter(function(pokemon){
      return pokemon.name.includes(search)
    })
    filterdPokemon.length === 0? pokemonContainer.innerHTML = `There are no pokemon here`: renderPokemon(filterdPokemon)
  })

pokemonContainer.addEventListener('click', function(e){
    if (e.target.dataset.action === 'flip'){
     let clickedPoke = POKEMON.find(function(pokemon){return e.target.dataset.id === pokemon.id.toString()})
     console.log(clickedPoke)
     e.target.src = clickedPoke.sprites.front ===  e.target.src? clickedPoke.sprites.back : clickedPoke.sprites.front
     }
  })
  renderPokemon(POKEMON)

})
/*
document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  let searchForm = document.querySelector("#pokemon-search-form")
  let userInput = document.querySelector("#pokemon-search-input")
  let pokemonContainer = document.querySelector("#pokemon-container")
  POKEMON.forEach(function (p) {
    makeCard(p.name, p.sprites.front)
  });

  searchForm.addEventListener("keydown",function(e) {

    let search = userInput.value
    console.log(search)

    pokemonContainer.innerHTML = ""
    // const result = POKEMON.filter(p => p.name === input)
    const result = POKEMON.filter(p => p.name.includes(search))
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
  pokemonFrame.appendChild(image)
}

pokemonContainer.addEventListener('click', function(e)){
  if(e.target.dataset.action === 'flip'){
    let clickedPoke = POKEMON.find(function(pokemon)){
      return e.target
    }
  }
})

})
*/
