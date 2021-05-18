function IterarArray(array) {
  for (let elementosArray of array) {
    console.info(elementosArray);
  }
}
//Invoco a la funcion 3 veces y le paso distintos arrays.
IterarArray([1,2,3,4,5,6,7,8,9,10]);
IterarArray(["Hola", "Chau"]);
IterarArray(["JavaScript", "Python", "Java"]);