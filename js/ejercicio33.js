//Copio el objeto superHEroes
const superHeroes ={
    "squadName" : "Super Hero Squad", 
    "homeTown" : "Metro City", 
    "formed" : 2016,
    "secretBase" : "Super tower", 
    "active" : true,
    "members" : [
      {
      "name" : "Molecule Man",
      "age" : 29,
      "secretIdentity" : "Dan Jukes", 
      "powers" : ["Radiation resistance", "Turning tiny", "Radiation blast"  ]
      },
      {
      "name" : "Madame Uppercut", 
      "age" : 39,
      "secretIdentity" : "Jane Wilson", 
      "powers" : [ "Million tonne punch", "Damage resistance", "Superhuman reflexes" ]
      },
      {
        "name": "Eternal Flame",
        "age": 20,
        "secretIdenty": "Ramon Perez",
        "powers": ["Leer mentes", "Desaparecer"]
      }
    ]
  }
//Consulto el valor ("Super Hero Squad") de la propiedad squadName, y lo muestro por consola con console.info
console.info(superHeroes["squadName"]);
//Consulto el valor que dice "Madame Uppercut" (ayuda: 3. objeto-propiedad-arreglo-propiedad) y lo muestro por consola con console.info.
console.info(superHeroes.members[1].name);
//Consulto el valor que dice "Superhuman reflexes"  y lo muestro por consola con console.info.
console.info(superHeroes.members[1].powers[2]);
//Consulto el valor "39" de la propiedad age de Madame Uppercut y lo muestro por consola con console.info.
console.info(superHeroes.members[1].age);
 