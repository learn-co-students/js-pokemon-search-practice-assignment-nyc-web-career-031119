document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)

  //GET THOSE POKEMON
    // iterate through pokemon array and give to html

  // get that container
  // let pkmnContainer = document.getElementById("pokemon-container")

  // a helper function that creates new 'card' for each pkmn in POKEMON
  const allPokemon = function () {
    let pkmnContainer = document.getElementById("pokemon-container")
    for (p of POKEMON){
      let card = `<div class="pokemon-card">
        <div class="pokemon-frame">
          <h1 class="center-text">${p.name}</h1>
          <div class="pokemon-image">
            <img data-id=${p.id} data-action="flip" class="toggle-sprite" src=${p.sprites.front}>
          </div>
        </div>
      </div>`
      pkmnContainer.insertAdjacentHTML('beforeend',card);
    };
  }

  allPokemon();





  //FEATURE: Implement a filter functionality for your Pokemon list.
    // filter with non exact matches
    // need to do:
      // access to each pkmn's name
      // track user input into text field
  let searchInput = document.getElementById('pokemon-search-input');


  const filterPokemon = function (event) {
      let pkmnContainer = document.getElementById("pokemon-container")
      searchInput = document.getElementById('pokemon-search-input');
      // alert('we in hur');
      let query = searchInput.value;
      console.log(query);
      let matchedPkmn = [];
      const newPkmnContainer = pkmnContainer.cloneNode(false);
      for(p of POKEMON){
        if(p.name.includes(query)){
          let card = `<div class="pokemon-card">
          <div class="pokemon-frame">
          <h1 class="center-text">${p.name}</h1>
          <div class="pokemon-image">
          <img data-id=${p.id} data-action="flip" class="toggle-sprite" src=${p.sprites.front}>
          </div>
          </div>
          </div>`
          matchedPkmn.push(card);
        }
      } //end of pokemon loop
      for (card of matchedPkmn) {
        newPkmnContainer.insertAdjacentHTML('beforeend',card);
      };
      console.log(newPkmnContainer);
      //replace currentdiv with filterdpkmans
      pkmnContainer.parentNode.replaceChild(newPkmnContainer, pkmnContainer);

  }

  searchInput.addEventListener('input', filterPokemon);


      // dynamically create list of pkmn everytime input field is modified





  //FEATURE: Implement a flip functionality on each Pokemon.

})
