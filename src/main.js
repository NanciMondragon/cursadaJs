
import data from "./data/data.js"
import { mostrarPersonajes} from "../src/logica.js"
import { buscarSpecie } from "../src/logica.js";
import { buscarStatus } from "../src/logica.js";

const personajes = data.personajes;
let personaje = "";
let species = "";
let status = "";
 
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






/*
let buscarStatus = personajes.filter(personaje => personaje.status == "Dead");
console.log(buscarStatus);

personajes.sort((a,b) =>{
    if(a.name > b.name){
        return 1;
    }
    if(a.name < b.name){
        return -1;
    }
    return 0;
})

console.log(personajes);

let buscar = personajes.find(elemento => elemento.name == "Summer Smith");
console.log(buscar);

let personajeNuevo = personajes.map(personaje => personaje.name = personaje.name);

console.log(personajeNuevo);

personajes.forEach((personaje) => {
    console.log(`Este personaje es ${personaje.name}, es de Tipo ${personaje.type}, su genero ${personaje.gender}` );
    
});

*/