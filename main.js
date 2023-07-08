function fetchStarWars() {
    fetch('https://swapi.dev/api/planets/?page=1')
        .then((res) => res.json())
        .then((data) => starWarchCharacters(data.results[0]))
}

function starWarchCharacters(planet) {
    const content = document.getElementById('content');
    const h2 = document.createElement('h2');
    h2.textContent = `Name: ${planet.name}`;

    const h3 = document.createElement('h3');
    h3.textContent = `Population: ${planet.population}`;

    const p = document.createElement('p');
    p.textContent = `Terrain: ${planet.terrain}`

    content.appendChild(h2);
    content.appendChild(h3);
    content.appendChild(p);

}
fetchStarWars()
