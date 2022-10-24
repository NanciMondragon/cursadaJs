

//Mostrar Personajes en Pantalla
export let mostrarPersonajes = (personajes) => {
    return `<section class = "peli"> 
    <center><h5><div id="${personajes.name}" class="click">More info</div></h5></center>
    <img src="${personajes.image}" class="poster">
    <h2>Specie: ${personajes.species}</h2>
    <h3>Gender: ${personajes.gender}</h3>
    <h3>Status: ${personajes.status}</h3>
    </section>`;
};

//Filtrar specie

export let buscarSpecie = (personajes,species) =>{
    const arraySpecie = personajes.filter((personaje) => personaje.species == species);
    //console.log(arraySpecie);
    return arraySpecie;
};

//Filtrar Status
/*
export let buscarStatus = personajes.filter(personaje => personaje.status == "Dead");
console.log(buscarStatus);
*/