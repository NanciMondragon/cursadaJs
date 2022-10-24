
import data from "./data/data.js"
import { mostrarPersonajes} from "../src/logica.js"
import { buscarSpecie } from "../src/logica.js";
import { buscarStatus } from "../src/logica.js";
import { ordenarAlfabeticamente } from "../src/logica.js";
import { buscador } from "../src/logica.js";

const personajes = data.personajes;
let personaje = "";
let species = "";
let status = "";
let todosPersonajes = personajes;
 
//Mostrar en pantalla personajes
const allPersonajes = document.getElementById("allPersonajes");
allPersonajes.innerHTML = personajes.map(mostrarPersonajes).join(" ");

//Filtrar por especie
const filtrarSpecie = document.querySelector("#filtrarSpecie");
filtrarSpecie.addEventListener("change", () => {
    species = document.querySelector("#filtrarSpecie").value;
    console.log (buscarSpecie (personajes, species))

    const allPersonajes = document.getElementById("allPersonajes");
    allPersonajes.innerHTML = " ";

    for (let i = 0; i < buscarSpecie(personajes, species).length; i++ ){
        //console.log(buscarSpecie(personaje, specie)[i])

        let mostrarSpecies = `<section class = "peli"> 
            <h2> ${buscarSpecie(personajes,species)[i].name}" </h2>
            <img src="${buscarSpecie(personajes,species)[i].image}" class="poster">
            <h2>Specie: ${buscarSpecie(personajes,species)[i].species}</h2>
            <h3>Gender: ${buscarSpecie(personajes,species)[i].gender}</h3>
            <h3>Status: ${buscarSpecie(personajes,species)[i].status}</h3>
            </section>`;
            allPersonajes.innerHTML +=mostrarSpecies;

    }
});

//Filtrar Status
const filtrarStatus = document.querySelector("#filtrarStatus");
filtrarStatus.addEventListener("change", () => {
    status = document.querySelector("#filtrarStatus").value;
    console.log (buscarStatus (personajes, status))

    const allPersonajes = document.getElementById("allPersonajes");
    allPersonajes.innerHTML = " ";

    for (let i = 0; i < buscarStatus(personajes, status).length; i++ ){
        //console.log(buscarStatus(personaje, status)[i])

        let mostrarStattus = `<section class = "peli"> 
            <h2> ${buscarStatus(personajes,status)[i].name}" </h2>
            <img src="${buscarStatus(personajes,status)[i].image}" class="poster">
            <h2>Specie: ${buscarStatus(personajes,status)[i].species}</h2>
            <h3>Gender: ${buscarStatus(personajes,status)[i].gender}</h3>
            <h3>Status: ${buscarStatus(personajes,status)[i].status}</h3>
            </section>`;
            allPersonajes.innerHTML +=mostrarStattus;

    }
});


//Order AZ -- ZA
const filtroAZ = document.querySelector("#filtroAZ");
filtroAZ.addEventListener("change", () => {
    console.log("click");
    //az = document.querySelector("#filtroAZ").value;
    //console.log (buscarStatus (personajes, status))

    //const allPersonajes = document.getElementById("allPersonajes");
    allPersonajes.innerHTML = " ";

    for (let i = 0; i < ordenarAlfabeticamente(personajes, filtroAZ.value).length; i++ ){
        //console.log(buscarStatus(personaje, status)[i])

        let ordenar = `<section class = "peli"> 
            <h2> ${ordenarAlfabeticamente(personajes,filtroAZ.value)[i].name}" </h2>
            <img src="${ordenarAlfabeticamente(personajes, filtroAZ.value)[i].image}" class="poster">
            <h2>Specie: ${ordenarAlfabeticamente(personajes,filtroAZ.value)[i].species}</h2>
            <h3>Gender: ${ordenarAlfabeticamente(personajes, filtroAZ.value)[i].gender}</h3>
            <h3>Status: ${ordenarAlfabeticamente(personajes, filtroAZ.value)[i].status}</h3>
            </section>`;
            allPersonajes.innerHTML += ordenar;

    }
});

//Buscador

const inputBuscador = document.getElementById("inputBuscador");
inputBuscador.addEventListener("keyup", () => {
  todosPersonajes = buscador(personajes, "name", inputBuscador.value);
  allPersonajes.innerHTML = todosPersonajes.map(mostrarPersonajes).join(" ")|| alert('To find your personaje, try with another word');
});





