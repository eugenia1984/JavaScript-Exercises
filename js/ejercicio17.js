// Se le pedirá al usuario un número y una vez que lo tengamos se deberá mostrar en pantalla las tablas de dicho número hasta el 10:
// Por ejemplo, si el usuario escribe 5 se deberá generar lo siguiente:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// ...........
// ...........
// 5 x 10 = 50

// Pido que ingrese un numero y lo guardo en la variable numeroIngresado
let numeroIngresado = Number(prompt('Por favor ingrese un número, para mostrarle la tabla del número del 1 al 10: '));
//declaro e inicializo en 0 la variable i que es el index para recorrer con el for los números del 1 al 10 para hacer la multiplicación
var i = 0;
//Con un for voy recorriendo del 1 al 10 y dentro hago la multiplicación del númeroIngresado por los números de la tabla
for (i=0; i<=10; i++)  {
  document.write("<ul>");
  document.write(` ${numeroIngresado} x  ${i} = ${numeroIngresado * i}`);
	document.write("</li>");
  document.write("</ul>");
}

