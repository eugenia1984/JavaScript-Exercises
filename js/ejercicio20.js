//Creo el array edades con al menos 8 edades distintas.
let edades = [1,7,8,20,9,15,18,60,81];
//Recorro el edades y voy sumándolas, mientras recorro el array una por una voy acumulándolo en la variable sumaEdades.
//Defino mis varaibles y las inicializo
sumaEdades = 0;
i = 0;
for (let i = 0; i < edades.length; i++) {
  sumaEdades += edades[i]
}
//Calculo el promedio de las edades haciendo el valor de sumaEdades dividido por la cantidad de edades (edades.length). Y lo muestro por consola con console.info. Y con el método .toFixed() redondeo a dos decimales
console.info(`El promedio de edad es: ${(sumaEdades/edades.length).toFixed(2)}`);