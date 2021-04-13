// Declara una variable que se llame peliculaElegida y asignale el método prompt() para que le puedas solicitar al usuario que ingrese su película favorita de una lista, que tú vas a proporcionar en dicho método. 

let peliculaElegida = prompt(`Por favor elegí cuál de estas películas es tu favorita: 
1- Coco
2- Relatos salvajes
3- Intocable
4- El señor de los anillos`);

// Evalúa cada uno de los casos con el condicional switch (utilizaremos este método para practicarlo). En el bloque de código de cada case le diremos que “su ticket ha sido emitido”, pero, lo haremos a través del método document.write() y en su argumento(dentro de los paréntesis) haremos un template literals con el formato HTML del texto y la imagen de la película elegida.
let pelicula = document.getElementById('pelicula')

switch (peliculaElegida) {
  case 1:
    pelicula.innerHTML = '<p>Su ticket ha sido emitido.</p> <img src="./img/coco.jpg" alt"pelicula coco" >';
    break;
  case 2:
    document.write(`<p>Su ticket ha sido emitido.</p> <img src="./img/relatos-salvajes.jpg" alt"pelicula relatos salvajes">`);
    break;
  case 3:
    document.write(`<p>Su ticket ha sido emitido.</p>`);
    break;
  default:
    document.write(`<p>Su ticket ha sido emitido.</p> <img src="./img/intocable.jpg" alt"pelicula Intocable">`);
    break;
}

//ver con innerHTML como este ejemplo a ver si asi se ve
//saludo.innerHTML = '<p> Bienvenid@ ' + nombre + ' a Brugge. </p> <p>  Disfrutá este verano con tu Brugge bien fria.</p>'  // MENSAJE DE BIENVENIDA
// ESTILOS AL TEXTO INGRESADO
//saludo.style.fontSize = '20px'
//saludo.style.fontWeight = 'bolder'
//saludo.style.height = '30px'
//saludo.style.textAlign = 'center'