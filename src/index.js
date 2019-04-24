document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  const pokemonContainer = document.querySelector('#pokemon-container');

  for (const poke of POKEMON) {
    const pokeCard = document.createElement('div');
    const pokeFrame = document.createElement('div');
    const pokeImg = document.createElement('div');
    const pokeH1 = document.createElement('h1');
    const img = document.createElement('img');

    pokeCard.className = 'pokemon-card';
    pokeFrame.className = 'pokemon-frame';
    pokeImg.className = 'pokemon-image';
    pokeH1.className = 'center-text';
    img.className = 'toggle-sprite';

    pokeH1.innerText = poke.name;
    img.dataset.id = poke.id;
    img.dataset.action = 'flip';
    img.src = poke.sprites.front;

    pokeCard.appendChild(pokeFrame);
    pokeFrame.appendChild(pokeH1);
    pokeFrame.appendChild(pokeImg);
    pokeImg.appendChild(img);

    pokemonContainer.appendChild(pokeCard);
  }
});

function myFunction() {
  const input = document.querySelector('#pokemon-search-input');
  const pokemonContainer = document.querySelector('#pokemon-container');

  // Declare variables
  let filter, h1;
  // input = document.getElementById(“mySearch”);
  filter = input.value.toUpperCase();
  // ul ia pokemonContainer
  const pokemonCards = pokemonContainer.getElementsByClassName('pokemon-card');

  for (const pokemon of pokemonCards) {
    h1 = pokemon.getElementsByTagName('h1')[0];
    if (h1.innerHTML.toUpperCase().indexOf(filter) > -1) {
      pokemon.style.display = '';
    } else {
      pokemon.style.display = 'none';
    }
  }
}