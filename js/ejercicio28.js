//Primer boton:
let cantidad = 0;

function contadorDeClick() {
  cantidad+=1;
  console.info(cantidad);
}

//Segundo boton:
let veces = 0;
function contadorClick() {
  veces+01;
  console.log(veces)
}
let btn = document.getElementById("btn2")
  btn.addEventListener('click',contadorClick);
