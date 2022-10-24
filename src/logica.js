
//Mostrar Personajes en Pantalla

export let mostrarPersonajes = (personajes) => {
    return `<section class = "peli"> 
    <center><h5><div id="${personajes.name}" class="click"> </div></h5></center>
    <h2>${personajes.name}</h2>
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

export let buscarStatus = (personajes, status) =>{
    const arrayStatus = personajes.filter((personaje) => personaje.status == status);
    //console.log(arrayStatus);
    return arrayStatus;
};

//Filtrar  A-Z --  Z-A

export const ordenarAlfabeticamente = (personajes, orden) => {
    const ordenarDeAZ = personajes.sort((personaje1, personaje2) => ((personaje1.name > personaje2.name) ? 1 : -1));
    if (orden === 'A-Z') {
    console.table(ordenarDeAZ);
      return ordenarDeAZ;
    }
    if (orden === 'Z-A') {
      return ordenarDeAZ.reverse();
    }
    return ordenarDeAZ;
  };

  //Buscador
  export const buscador = (personajes, condition, value) => {
    //console.log(value);
    return personajes.filter(personaje => personaje[condition].toLowerCase().includes(value.toLowerCase()));
  }

  





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
  
  