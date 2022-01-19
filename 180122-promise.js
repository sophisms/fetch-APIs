// Ejemplo: https://replit.com/@Sofia-Alejand12/promises#index.js
// APIs: https://developer.mozilla.org/en-US/docs/Web/API

function exito(funciona) {
  console.log(funciona);
}

function falla(error) {
  console.log(error);
}

const promesa = new Promise((parametrox, parametroy) => {
  if (true) parametrox("¡Promesa resuelta amigo!");
  else parametroy("Promesa fallida");
});

promesa.then((funciona) => exito(funciona)).catch((error) => falla(error));

(parametros) => nombredefuncion(parametros);

// Ejemplo más complejo
function exito(funciona) {
    console.log(funciona);
}

function falla(error) {
    console.log(error);
}

const promesa = new Promise((parametrox, parametroy) => {false
    ? parametrox("¡Promesa resuelta amigo!")
    : parametroy("Promesa fallida");
});

promesa.then((funciona) => exito(funciona)).catch((error) => falla(error));
