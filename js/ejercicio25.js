//Creo la funcion expresada facturacion() que recibe como parametros: precio (valido que ingrese numero, que no ingrese vacio, que no sea 0, que no sea nÃºmero negaativo) y medioPago. Si el precio estÃ¡ (0,200) no importa el Ã©todo de pago, no hay ningÃºn descuento (es la condicion 1ra a evaluar en el if). Si el precio estÃ¡ en (200,400) el metodo de pago si influye, en el else if lo selecciono con switch. Y finalmente si el monto es mayor a 400 tampoco importa el metodo de pago, siempre tiene un 40 % de descuento. Siempre muestro todo por consola.
const facturacion = (precio = undefined, medioPago = undefined) => {

  if(precio === undefined) return console.warn("No ingresaste un nÃºmero");

  if(typeof precio !== "number") return console.error(`El ${precio} ingresado no es un numero.`);

  if(precio === 0) return console.error("El precio ingresado no puede ser 0.");

  if(Math.sign(precio)=== -1) return console.error("El precio ingresado no puede ser negativo");

  if(precio < 200) {
    return console.info(`El monto a abonar es de ${precio}.`);
  
  } else if(precio <400){
      switch (medioPago) {
        case "C":
          console.info(`El precio ingresado es de ${precio}, por pago en tarjeta de crÃ©dito tenÃ©s un 10 % de descuento, tu precio final es de ${precio *0.9}.`);
          break;
        case "E":
          console.info(`El precio ingresado es de ${precio}, por pago en efectivo tenÃ©s un 30 % de descuento, tu precio final es de ${precio *0.7}.`);
          break;
        case "D":
          console.info(`El precio ingresado es de ${precio}, por pago en tarjeta de dÃ©bito tenÃ©s un 20 % de descuento, tu precio final es de ${precio *0.8}.`);
          break;   
       default:
        console.warn("No ingresaste el medio de pago");
        break;
     }
   } else {
    return console.info(`El precio ingresado es de ${precio}, por monto mayor a $400 tenÃ©s un 40% de descuento, tu precio final es de ${precio * 0.6}.`);
  }
}


//Llamo a la funcion sin parametros para ver validacion
facturacion();
//Llamo a la funcion con string como parametros para ver validacion
facturacion("Hola");
//Llamo a la funcion con 0 como parametros para ver validacion
facturacion(0);
//Llamo a la funcion con numero negativo como para¡metros para ver validacion
facturacion(-20);

// Llamo a la funcion y paso como parÃ¡metro un importe menor a 200
facturacion(100,"C");
facturacion(110,"E");
facturacion(120,"D");

// Llamo a la funcion y paso como parÃ¡metro un importe entre (200,400)
facturacion(300,"C");
facturacion(300,"E");
facturacion(300,"D");
// Llamo a la funcion y paso como parÃ¡metro mayor a $ 400
facturacion(500,"C");
facturacion(600,"E");
facturacion(700,"D");