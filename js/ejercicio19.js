//Crea el array llamado toDoList con 5 treas para hacer
let toDoList = ["Sacar a pasear al perro", "Cocinar", "Practicar programacion", "Comer", "Despejarse"];
//Con console.info muestro mi array completo
console.info(toDoList);
//A través del método indexOf() encontrar el indice de una de las 5 tareas especificadas en el array.
console.info(toDoList.indexOf("Despejarse"));
//Con el método splice(0,1) selecciono el índice y lo borro, para borrar el item que fue devuelto por el método indexof()
toDoList.splice(4,5); 
//Para verificarlo muestro el array moficado
console.info(toDoList);