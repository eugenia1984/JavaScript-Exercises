//Obtengo cada uno de los elementos input, mediante el método querySelector() utilizando los id de cada uno que son distintos y únicos para cada uno. Y guardo a cada uno en una variable
let usuario = document.querySelector('#usuario');
let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');
//Creo la valiable enviar para guardar el elemento botón del HTML con document.getElementById utililzando su id enviar, para luego aplicarle el addEventListener que escuche cuando se hace click en el botón, se va a llamar a la función mostratTexto()
//La función mostrarTexto() va a mostrar con un alert el siguiente texto:
//“Estos fueron los datos ingresados 
//Usuario: Pepito123 
//Nombre: Pepito lavalle 
//Mail: pepito12@gmail.com”
//En una variable enviar guardo el elemento de HTML boton con .getElementById y uso su id="enviar"
let enviar = document.getElementById("enviar");
enviar.addEventListener('click', mostrarTexto);
//La función mostrarTexto()
function mostrarTexto() {
  alert(`Estos fueron los datos ingresados:
  Usuario: ${usuario.value}
  Nombre: ${nombre.value}
  Mail: ${email.value}`);
}