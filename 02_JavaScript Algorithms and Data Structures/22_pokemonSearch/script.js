document.getElementById('search-button').addEventListener('click', function() {
    const inputVal = document.getElementById('search-input').value.trim();
    const pokemonInfo = document.getElementById('pokemon-info');
    const typesElement = document.getElementById('types');
    typesElement.innerHTML = ''; // Clearing types between searches

    if (inputVal) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${inputVal.toLowerCase()}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Pokémon not found');
                }
                return response.json();
            })
            .then(data => {
                displayPokemonData(data);
            })
            .catch(error => {
                alert(error.message);
                pokemonInfo.style.display = 'none'; // Hide pokemon info if not found
            });
    }
});

function displayPokemonData(data) {
    const pokemonInfo = document.getElementById('pokemon-info');
    pokemonInfo.style.display = 'block'; // Show pokemon info

    document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
    document.getElementById('pokemon-id').textContent = `#${data.id}`;
    document.getElementById('weight').textContent = `Weight: ${data.weight}`;
    document.getElementById('height').textContent = `Height: ${data.height}`;
    document.getElementById('hp').textContent = data.stats[0].base_stat;
    document.getElementById('attack').textContent = data.stats[1].base_stat;
    document.getElementById('defense').textContent = data.stats[2].base_stat;
    document.getElementById('special-attack').textContent = data.stats[3].base_stat;
    document.getElementById('special-defense').textContent = data.stats[4].base_stat;
    document.getElementById('speed').textContent = data.stats[5].base_stat;

    const typesElement = document.getElementById('types');
    data.types.forEach(typeInfo => {
        const typeSpan = document.createElement('span');
        typeSpan.textContent = typeInfo.type.name.toUpperCase();
        typesElement.appendChild(typeSpan);
    });

    // Handling sprite image
    const spriteElement = document.getElementById('sprite') || document.createElement('img');
    spriteElement.id = 'sprite';
    spriteElement.src = data.sprites.front_default;
    pokemonInfo.appendChild(spriteElement);
}
