const nodeFetch = require("node-fetch");
//import nodeFetch from "node-fetch";

const realizarPeticion = async () => {
  const respuestaDesdeServer = await nodeFetch(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const datosParseados = await respuestaDesdeServer.json();
  for (let pokemon of datosParseados.results) {
    console.log(pokemon.name);
  }
};

realizarPeticion();
