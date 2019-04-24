document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  const pokemonContainer = document.querySelector("#pokemon-container")
  const pokemonSearch = document.querySelector("#pokemon-search-form")
  const pokemonInput = document.querySelector("#pokemon-search-input")

  let pokemonList = POKEMON.map(function(el, i, arr){
    return pokemonContainer.innerHTML +=
    `<div class="pokemon-card">
      <div class="pokemon-frame">
        <h1 class="center-text">${el.name}</h1>
        <div class="pokemon-image">
          <img data-id="${i+1}" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png">
        </div>
      </div>
    </div>`
  });

  pokemonContainer.addEventListener('click', function(e){
    if (e.target.className === 'toggle-sprite'){
      const id = e.target.dataset.id
      if (e.target.dataset.action === 'flip'){
        e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`
        e.target.dataset.action = 'unflip'
      }
      else if (e.target.dataset.action === 'unflip'){
        e.target.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
        e.target.dataset.action = 'flip'
      }
    }
  })

  pokemonInput.addEventListener('keyup', function(e){
    let whatsTyped = pokemonInput.value
    let storage = ``
    let filteredPokemon = POKEMON.map(function(el, i, arr){
      if (el.name.includes(whatsTyped)){
        storage +=
        `<div class="pokemon-card">
          <div class="pokemon-frame">
            <h1 class="center-text">${el.name}</h1>
            <div class="pokemon-image">
              <img data-id="${i+1}" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png">
            </div>
          </div>
        </div>`
      }
    })
    if (!storage){
      storage = `<p><center>There are no Pokémon here</center></p>`
    }
    return pokemonContainer.innerHTML = storage
  })
})
