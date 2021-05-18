//Creo el array vacio que se llame listaDeSuper.
let listaDeSuper = [];
//Con un prompt pido  al usuario para que ingrese al menos 5 productos para llenar la lista de super.
let listaUsuario = prompt(`Por favor ingrese 5 productos para armar la lista del supermercado, separe cada producto con una coma.`);
listaDeSuper = listaUsuario.split();
//muestro por consola los productos
console.log(`Sus productos son: ${listaDeSuper}`);
