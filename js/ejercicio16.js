// Crear un programa para el ingreso a un sistema. El usuario deberá ingresar una contraseña que deberá coincidir con la que esté guardada en la memoria.
// Tiene 3 intentos para acertar: si acierta, se le deberá informar que acertó y que puede ingresar, y dejar de pedírsela, si se equivoca, se le solicitará que la ingrese de nuevo.

//Pido la usuario que ingrese la contraseña y la guardo en la variable contrasenia
let contrasenia = prompt('Por favor ingrese su contraseña: ');
//Defino cuál es la contraseña guardada
let contraseniaGuardada = "Hola123";
//Recorro con un for para que le pida hasta 3 veces que ingrese la contraseña, en el caso de que sea distinta a la guardada
for (i=0; i<=3; i++) {
  if (contrasenia != contraseniaGuardada) {
    contrasenia = prompt(`No ingreso la contraseña correcta, por favor vuelva a ingresarla, recuerde que son tres intentos: `);
    i+=1;
  } else {
    alert(`Felicitaciones ingresó la contraseña correcta!`)}
}
