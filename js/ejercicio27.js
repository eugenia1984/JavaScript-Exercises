// Opcion cde funciÃ³n declarada:
/*
function tirarDados() {
  document.getElementById("resultado").innerHTML = Math.floor(Math.random() * 6) + 1;
}
*/


//Opcion con arrow function:
tirarDados = () => document.getElementById("resultado").innerHTML = Math.floor(Math.random() * 6) + 1;