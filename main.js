const personajes  = [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
        "url": "https://rickandmortyapi.com/api/character/2",
        "created": "2017-11-04T18:50:21.651Z"
    },
    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
        "url": "https://rickandmortyapi.com/api/character/3",
        "created": "2017-11-04T19:09:56.428Z"
    },
    {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/4.jpeg",
        "url": "https://rickandmortyapi.com/api/character/4",
        "created": "2017-11-04T19:22:43.665Z"
    },
    {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/5.jpeg",
        "url": "https://rickandmortyapi.com/api/character/5",
        "created": "2017-11-04T19:26:56.301Z"
    },
    {
        "id": 6,
        "name": "Abadango Cluster Princess",
        "status": "Alive",
        "species": "Alien",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Abadango",
            "url": "https://rickandmortyapi.com/api/location/2"
        },
        "location": {
            "name": "Abadango",
            "url": "https://rickandmortyapi.com/api/location/2"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/6.jpeg",
        "url": "https://rickandmortyapi.com/api/character/6",
        "created": "2017-11-04T19:50:28.250Z"
    },
    {
        "id": 7,
        "name": "Abradolf Lincler",
        "status": "unknown",
        "species": "Human",
        "type": "Genetic experiment",
        "gender": "Male",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Testicle Monster Dimension",
            "url": "https://rickandmortyapi.com/api/location/21"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/7.jpeg",
        "url": "https://rickandmortyapi.com/api/character/7",
        "created": "2017-11-04T19:59:20.523Z"
    },
    {
        "id": 8,
        "name": "Adjudicator Rick",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "location": {
            "name": "Citadel of Ricks",
            "url": "https://rickandmortyapi.com/api/location/3"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/8.jpeg",
        "url": "https://rickandmortyapi.com/api/character/8",
        "created": "2017-11-04T20:03:34.737Z"
    },
    {
        "id": 9,
        "name": "Agency Director",
        "status": "Dead",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/9.jpeg",
        "url": "https://rickandmortyapi.com/api/character/9",
        "created": "2017-11-04T20:06:54.976Z"
    },
    {
        "id": 10,
        "name": "Alan Rails",
        "status": "Dead",
        "species": "Human",
        "type": "Superhuman (Ghost trains summoner)",
        "gender": "Male",
        "origin": {
            "name": "unknown",
            "url": ""
        },
        "location": {
            "name": "Worldender's lair",
            "url": "https://rickandmortyapi.com/api/location/4"
        },
        "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/10.jpeg",
        "url": "https://rickandmortyapi.com/api/character/10",
        "created": "2017-11-04T20:19:09.017Z"
    },
];

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

