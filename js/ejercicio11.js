// Crea la variable numeroSecreto y hazlo igual a un entero (Tú eliges el número).
// Pregúntale al usuario que adivine el numero en un prompt.
// Si el usuario adivina el numero deberá aparecer un alert diciendo que adivinó el número. (Tienes que hacer la comparación con ( === ) y no te olvides de parsearlo).
// El algoritmo también debe decir, si numeroSecreto es más alto o  más bajo del que dijo el usuario.
// Por último, si el usuario no adivina el número, deberá aparecer un mensaje diciendo que se equivocó.
const numeroSecreto = 10;
const numeroUsuario = parseInt(prompt('Por favor, adivine el numero que estoy pensando. Ingreselo y veremos: '));
  
if (numeroSecreto === numeroUsuario) {
    alert('Felicitaciones! Adivinaste el número!');
} else if (numeroSecreto > numeroUsuario) {
    alert('Perdiste, pero te doy una pista! El numero ingresado es menor al número secreto');
} else {
    alert('Perdiste, pero te doy una pista! El numero ingresado es mayor al número secreto');
}