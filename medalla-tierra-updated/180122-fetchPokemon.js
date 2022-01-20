// Charizard
fetch("https://pokeapi.co/api/v2/pokemon/6/")
  .then((respuesta) => respuesta.json())
  .then((pokemon) => {
    let element = document.getElementById("elemento1");
    element.innerHTML = `<p>Apariencia: <p>
  <img src='${pokemon.sprites.front_default}'><p><p>Estatura: ${pokemon.height}<p> Peso: ${pokemon.weight}<p>`;
    console.log(pokemon);
  })
  .catch((err) => console.log(err));

// Pikachu
fetch("https://pokeapi.co/api/v2/pokemon/25/")
  .then((response) => response.json())
  .then((pokemon2) => {
    let element2 = document.getElementById("elemento2");
    element2.innerHTML = `<p> Apariencia:<p> 
  <img src='${pokemon2.sprites.front_default}'><p>Estatura: ${pokemon2.height}<p> Peso: ${pokemon2.weight}`;
    console.log(pokemon2);
  })
  .catch((err) => console.log(err));

  // Jigglypuff
fetch("https://pokeapi.co/api/v2/pokemon/39/")
.then((response) => response.json())
.then((pokemon2) => {
  let element2 = document.getElementById("elemento3");
  element2.innerHTML = `<p>
Apariencia:<p> <img src='${pokemon2.sprites.front_default}'><p>Estatura: ${pokemon2.height}<p> Peso: ${pokemon2.weight}`;
  console.log(pokemon2);
})
.catch((err) => console.log(err));