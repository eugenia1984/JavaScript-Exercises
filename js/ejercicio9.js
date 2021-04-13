// Pedirle al usuario que introduzca 1 numero.
let numero = Number(prompt('Por favor ingresa un número y te diré si es par o impar: '));
// Comparar si es par o no, a través de un if/else. Si es par que muestre una alerta indicando que el número es par o en caso contrario que muestre una alerta que es impar.
if ( numero%2 == 0) {
  alert(`El número ingrasado: ${numero} es par`);
} else {
  alert(`El número ingresado: ${numero} es impar`);
}