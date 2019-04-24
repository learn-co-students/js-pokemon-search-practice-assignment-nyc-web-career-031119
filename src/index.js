document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE

  //find all POKEMON
  const pokeContainer = document.querySelector("#pokemon-container")
  function renderSinglePokemon(pokemon){
    return (`
      <div class="pokemon-card">
      <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
      <div class="pokemon-image">
      <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
      </div>
      </div>`)
    }

  const renderAllPokemon = POKEMON.map(renderSinglePokemon)

  //find form
  const form = document.querySelector('#pokemon-seach-form');
  const pokeInput = document.querySelector('#pokemon-search-input');
// console.log(pokemon)
  pokeContainer.innerHTML = renderAllPokemon.join('')
// pokeContainer.innerHTML = ``


    //filters search
    pokeInput.addEventListener('input', function(e){
      pokeContainer.innerHTML = ``
      let search =  pokeInput.value
      let fileredPokemon = POKEMON.filter(function(pokemon){
        return pokemon.name.includes(search)
      })
      fileredPokemon.forEach(function(pokemon){
        pokeContainer.innerHTML += `<div class="pokemon-card">
        <div class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div class="pokemon-image">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
        </div>
        </div>
        </div>`
      })

    })


    pokeContainer.addEventListener('click', function(e){
      if (e.target.dataset.action === "flip"){
        let clickedPoke = POKEMON.find(function(pokemon){
          return e.target.dataset.id === pokemon.id.toString()
        })
        //let flip back
        e.target.src = clickedPoke.sprites.front === e.target.src ? clickedPoke.sprites.back : clickedPoke.sprites.front
      }
    })



  })
