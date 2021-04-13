// Realizar un algoritmo que pida el nombre de una persona. Si el dato entra vacío, debe pedir nuevamente al usuario que introduzca su nombre (“No ha introducido ningún nombre”).

let nombreIngresado = prompt('Por favor ingrese su nombre');

if (nombreIngresado.length == 0) {
  alert (`No ha introducido ningun nombre!`);
  let nombreIngresado = prompt('Por favor ingrese su nombre: ');
  alert (`Bienvenidddd ${nombreIngresado}`);
} else {
  alert (`Bienvenid@ ${nombreIngresado}`);
}

// Una vez hecho esto, que se despliegue una alerta de bienvenida con el nombre del usuario.

