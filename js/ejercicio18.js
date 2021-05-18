//Ensalada de frutas
//Declara un array llamado ensaladaDeFrutas.
//Usa un bucle For y muestra cada ítem de ensaladaDeFrutas en la consola, con el siguiente mensaje: “Las frutas que hay en la ensalada son:”
let ensaladaDeFrutas = ['manzana', 'banana', 'anana', 'naranja', 'kiwi'] ;
//Las muestro con un console.log
console.log(`La ensalada de fruta contiene: ${ensaladaDeFrutas}`);
//Recorro las frutas con un for y las muestro con console.info
for (let i = 0; i < ensaladaDeFrutas.length; i++) {
  console.info (`Las frutas que hay en la ensalada son: ${ensaladaDeFrutas[i]}`);
}
//Ejemplo con for of y las muestro con console.log
for (let frutas of ensaladaDeFrutas) {
   console.log(`Las frutas que hay en la ensalada son: ${frutas} `)
}