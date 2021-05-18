//Ejericico 1
//Para mira el textContent del h1 en la consola primero lo guardo en la variable titulo accediendo desde el document con el método .querySelector(), porque se que el h1 es único en la página y el .querySelector de devuelve el primer elemento (al ser h1 el único me devuelve el h1). Y luego lo muestro por consola con console.info pasándole como parámetro la variable titulo
let titulo = document.querySelector('h1');
console.info(titulo);
//Uso la variable titulo que tiene mi etiqueta h1 del DOM y con textContent cambio a un nuevo string que diga “Estoy agregando un nuevo texto”. Lo que me va a cambiar el texto de mi etiqeuta h1 por : Estoy agregando un nuevo texto
titulo.textContent = "Estoy agregando un nuevo texto"
//Elegí el primer elemento p con el método .querySelector ya que me va a seleccionar el primero de los párrafos y lo guardo en la variable primer_parrafo. Y le agrego el siguiente código html en su interior con la etiqueta span : Estoy aprendiendo a manipular el DOM con .innerHTML
let primer_parrafo = document.querySelector('p')
primer_parrafo.innerHTML = "<span>Estoy aprendiendo a manipular el DOM </span>"
//Otra forma de poder manipular el primer párrafo, es obtenerlo por su id con: let primer_parrafo = document.getElementById('primerParrafo')
//Para mirar por la consola el innerHTML del segundo párrafo

//Ejercicio 2:
//Como el h1 lo había guardado en la variable título, utilizo la misma variables y con la propiedad style del elemento en javascript le aplico backgroundColor yellow para darle color de fondo amarillo.
titulo.style.backgroundColor = 'yellow';
//Crea un selector .subtitulos en mi archivo de css llamado ejercicios.css y le doy las propiedades CSS: color: teal; font-size: 2rem; font-family: Arial, Helvetica, sans-serif;. Luego agrégale a los <h2> la clase .subtitulos con la propiedad JS classList.
let subtitulosH2 = document.querySelectorAll("h2");
subtitulosH2.classList.add("subtitulos");
//Obtén los elementos con la clase .estilo-letras y remueve la misma con la propiedad JS classList que corresponda.
let elementos = document.getElementsByClassName("estilo-letras").classList.remove("estilo-letras");
