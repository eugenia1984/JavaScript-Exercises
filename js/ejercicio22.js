//Declaro el array nombre con 6 nombres
let nombres = ["Analia", "Carlos", "Andres", "Agustin", "Mateo","Ana"];
//Muestro por consola el array
console.info(nombres);
//Creo una segunda variable que la llamo nombreMasLargo y la inicializo vacía
let nombreMasLargo = ""; 
//Creo una tercer varaible y la llamo NombreMasCorto
let nombreMasCorto = "";
//Voy a ir guardando el nombre mas largo a medida que se va ejecutando el for, voy a ir recorriendo uno a uno los nombres y comparando cuál es más largo (que seguarda en nombreMasLargo)
for (let i = 0; i < nombres.length; i++) {
  if (nombres[i].length >= nombreMasLargo.length) {
    nombreMasCorto = i;
    nombreMasLargo = nombres[i];
  }
}
console.log(`El nombre más largo de la lista es: ${nombreMasLargo}`);