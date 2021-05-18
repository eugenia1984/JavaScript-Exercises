//Creo la funcion
function calculoMayor(num1,num2) {
  if (num1>num2) {
    return console.info(`${num1} es mayor que ${num2}.`);
  } else if (num1<num2) {
    return console.info(`${num1} no es mayor a ${num2}, sino que es menor.`);
  } else {
    console.info(`${num1} no es mayor a ${num2}, son iguales.`);
  }
}

//Como no hay que pedir informacion al usuario, no compruebo que se ingresan nÃºmeros efectivamente, directamente invoco a la funcion y lo muestro por consola con console.info.
//Invoco a la funcion cumpliendo la primer condicion
calculoMayor(10,2);
////Invoco a la funcion cumpliendo la segunda condicion
calculoMayor(2,10);
//Invoco a la funcion cumpliendo la tercera condicion
calculoMayor(10,10);