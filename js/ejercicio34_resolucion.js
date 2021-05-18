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
      "name" : "Eternal Flame", 
      "age" : 32,
      "secretIdentity" : "Jon Doe", 
      "powers" : [ "Run like a flash", "Dog Rescue", "Excelent cooker" ]
      }
  ]
}

let boton = document.querySelector("#boton");
boton.addEventListener("click" , function cargarHeroes() {
  document.querySelectorAll("span")[0].innerHTML = superHeroes.members[0].secretIdentity;
  document.querySelectorAll("span")[1].innerHTML = superHeroes.members[0].age;
  document.getElementById("heroe1").innerHTML = (`
  <li>${superHeroes.members[0].powers[0]}</li> 
  <li>${superHeroes.members[0].powers[1]}</li>
  <li>${superHeroes.members[0].powers[3]}</li>`);

  document.querySelectorAll("span")[2].innerHTML = superHeroes.members[1].secretIdentity;
  document.querySelectorAll("span")[3].innerHTML = superHeroes.members[1].age;
  document.getElementById("heroe2").innerHTML = (`
  <li>${superHeroes.members[0].powers[0]}</li> 
  <li>${superHeroes.members[0].powers[1]}</li>
  <li>${superHeroes.members[0].powers[3]}</li>`);

  document.querySelectorAll("span")[4].innerHTML = superHeroes.members[2].secretIdentity;
  document.querySelectorAll("span")[5].innerHTML = superHeroes.members[2].age;
  document.getElementById("heroe3").innerHTML = (`
  <li>${superHeroes.members[0].powers[0]}</li> 
  <li>${superHeroes.members[0].powers[1]}</li>
  <li>${superHeroes.members[0].powers[3]}</li>`);
});


