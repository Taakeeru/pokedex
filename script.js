




async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
    let response = await fetch(url);
    let currentPokemon = await response.json();

    console.log('Loaded Pokemon', currentPokemon);
    renderPokemonCards(currentPokemon);
}

function renderPokemonCards(currentPokemon) {
    document.getElementById('pokemon-img').src = currentPokemon['sprites']['other']['dream_world']['front_default'];
}


// bilder sprites other dream_world front_default responseAsJson['sprites']['other']['dream_world']['front_default'] toUpperCase()
