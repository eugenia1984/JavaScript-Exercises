//Como el boton creado tiene id="ejercicio30, creo la variable boton a la que voy a relacionar con el boton de mi HTML mediante .getElementById, asi luego escribo menos código, en vez de poner document.getElementById("ejercicio30") solo escribo boton
let boton = document.getElementById("ejercicio30");
//Y agrego el .addEventListener con el evento click que activará la función cambiarTexto que cambiará el texto del botón por “Desactivado”
boton.addEventListener('click', cambiarTexto);
//Agrego el .addEventListener con el evento mouseenter que activará la función cambiarVerde, que cambiará el color a verde
boton.addEventListener("mouseEnter", cambiarVerde);
//Agrego el .addEventListener con el evento mouseleave que activará la función cambiarColor, vuelviendo al color que predeterminamos en CSS (rojo)
boton.addEventListener('mouseLeave', volverColor);
//Función cambiarTexto
function cambiarTexto() {
  boton.innerHTML="Desactivado";
}
//Función cambiarVerde
function cambiarVerde() {
  boton.style.color = "green";
}
//Funcion cambiarColor
function volverColor() {
  boton.style.color = "red";
}