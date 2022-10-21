
import data from "./data/data.js"

const personajes = data.personajes;

//Mostrar en pantalla personajes
let mostrarPersonajes = (personajes) => {
    return `<section class = "peli"> 
    <center><h5><div id="${personajes.name}" class="click">More info</div></h5></center>
    <img src="${personajes.image}" class="poster">
    <h2>Specie: ${personajes.species}</h2>
    <h3>Gender: ${personajes.gender}</h3>
    <h3>Status: ${personajes.status}</h3>
    </section>`;
};

const allPersonajes = document.getElementById("allPersonajes");
allPersonajes.innerHTML = personajes.map(mostrarPersonajes).join(" ");

//Filtrar por especie
let buscarSpecie = (personajes,species) =>{
    const arraySpecie = personajes.filter((personaje) => personaje.species == species);
    console.log(arraySpecie);
    return arraySpecie;
};

const filtrarSpecie = document.querySelector("#filtrarSpecie");
filtrarSpecie.addEventListener("change", () => {
    species = document.querySelector("#filtrarSpecie").value;

    const allPersonajes = document.getElementById("allPersonajes");
    allPersonajes.innerHTML = " ";

    for (let i = 0; i < buscarSpecie(personaje, specie).length; i++ ){
        console.log(buscarSpecie(personaje, specie)[i])
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

