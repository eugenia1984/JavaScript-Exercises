// Se le pedirá al usuario 2 números para generar la suma, la resta, la división y la multiplicación entre ellos.
//1. Preguntar al usuario que operación quiere realizar antes de que ingrese los dos números a operar.
// 2. Si el usuario no ingresa ninguna respuesta, automáticamente informarle que deberá ingresar un dato.
//Defino las varaibles
let num1 = 0;
let num2 = 0;
let resultado = 0;
//Con prompt pido los dos numeros al usuario, como ingresan como String los paso a numero con NUMBER
num1 = Number(prompt('Ingrese el primer número: '));
num2 = Number(prompt(' Ingrese el segundo número: '));
//Pido que eliga la operacion que hara
let operacion = Number(prompt(`Ingrese la opción en número de  la operación que desea hacer:
1 - Suma
2 - Resta
3 - Multiplicación
4 - División`));
//Con un if veo que si no eligio ninguno de los numeros de las acciones le vuelva a preguntar para que elija y antes aclare eligio mal
if (operacion!= 1 || operacion!=2 || operacion!=3 || operacion!=4) {
    alert('Opción incorrecta');
    prompt(`Por favor ingrese la operación que desea hacer:
    1 - Suma
    2 - Resta
    3 - Multiplicación
    4 - División.`);
  } if else (operacion = 1) { //en el if else, ya eligio la opcion correcta, asi que voy viendo caso por caso para que acorde a la opcion haga la operaciones matematica
    resultado = num1 + num2;
    alert(`El resultado de la suma es: ${resultado}`);
  } if else (operacion = 2){
      resultado = num1 - num2;
      alert(`El resultado de la resta es: ${resultado}`);
  } if else (operacion = 3){
      resultado = num1 * num2;
      alert(`El resultado de la multiplicación es: ${resultado}`);
  }else {
        resultado = num1 / num2;
        alert(`El resultado de la división es: ${resultado}`);
  }
  


