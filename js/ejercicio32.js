//Creo el objeto con el nombre toDolist con las propiedades (keys) y valores que se pidieron
const toDoList = {
  'tipo de tareas' : "Compras",
  dia : "Lunes",
  productos : ["frutas", "verduras", "cereales"],
  'cantidad de productos' : [3,5,2],
  estado : "pendiente",
  notificacion : Notificacion = () => alert(`Esta tarea tiene una prioridad urgente!`)
}
//Muestro por consola el día de la compra con dot notation con console.info
console.info(toDoList.dia);
//Muestro por consola el tipo de tarea usando bracket notatio con console.info
console.info(toDoList['tipo de tareas']);
//Muestro por consola la cantidad de productos usando bracket notation con console.info
console.info(toDoList['cantidad de productos']);

