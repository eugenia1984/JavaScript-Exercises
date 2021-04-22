# Algunos ejercicios con teoría de JavaScript, para ver algnos temas en particular

## Funciones:
Son un bloque de código, autocontenido (independiente del scoope global) que se define solo una vez y se puede ejecutar en cualquer momento. Se declara una vez y se reutiliza todas las veces que se necesite. Un ejemplo:

```
//Creo la función saludar que recibe como parámetros las variables nombre y edad y por consola devuelve un saludo

function saludar (name, age) {
console.log(`Hola, mi nombre es ${name} y tengo ${age} años);
}

//Llamo a la función con mis datos en las variables

saludar('Eugenia', 36);
```

***

## Objetos:
Son una colección de key-value ( propiedades / atributos, que describen ago del objeto). Hacen acciones que terminan con (), reciben datos para funcionar, se las invoca con (), son métodos. Un ejemplo:

```
const euge = {
  nombre:"María Eugenia",         
  apellido:"Costa",               
  edad:36,                        
  pasatiempos:["cocinar", "leer", "andar en bicicleta"],       
  contacto:{
    email:"mariaeugeniacosta1@gmail.com",     
    linkedin:"https://www.linkedin.com/in/maríaeugeniacosta"  
  }        
}   
```

Para acceder a los objetos:

```
console.log(euge["nombre"]);        //María Eugenia
console.log(euge.apellido);         //Costa
console.log(euge.pasatiempos[0]);   //cocinar
console.log(euge.contacto.email);   //mariaeugeniacosta1@gmail.com
```
Algunos métodos:

```
console.log(Object.keys(euge));   //Me forma un ARRAY que itera las KEYS(llaves): nombre, apellido, edad,...
console.log(Object.values(euge));   //Me forma un ARRAY que itera los VALUE(valores): María Eugenia, Costa, 36,...
console.log(euge.hasOwnProperty("nombre"));   //True, ve si tengo la propiedad llamada nombre
```
### 'for in' y 'for of' con objetos:

**for in** permite recorrer o iterar las propiedades de un objeto primitivo de JavaScript, va a listar solo las propiedades (KEYS), no los valores (VALUE)por ejemplo:

```
const ana = {
  nombre2:"Analia",
  apellido2:"Bruni"
}

for (const propiedad in ana){
  console.log(propiedad);
}
```
Pero puedo hacer que por consola me muestre KEY-VALUE:

```
const agus = {
  nombre3:"Agustin",
  apellido3:"Costa"
}

for (const propiedad in agus){
  console.log("key:${propiedad}, value${agus{[propiedad]}}");
}
```
**for of** permite recorrer todos los elementos de cualquier objeto que sea iterable en JavaScript (arrays de números, cadena de texto, etc.). Un ejemplo con array de números:

```
let numeros=[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

for (const elemento of numeros){
  console.log(elemento)
}
```

Un ejemplo con string:

```
let cadena = "Hola Mundo"

for(const caracter of cadena){
  console.log(caracter);
}
```

***

## Programación orientada a objetos:

### Prototipos:

Es un mecanismo por el cual un **objeto** puede **heredar** **atributos** y **métodos** de un **objeto padre**, es decir hace una copia del prototipo en el cual está basado. <br>

**clases** : son modelos a seguir, par basarnos en ellas y generar instancias. <br>

**objetos** : son las instancias de esa idea, y tienen:
  * **atributos** : características o propiedades del objeto, son variables dentro de un objeto.
  * **métodos** : son las acciones que un objeto puede realizar, son funciones (rutinas de código que se pueden reutilizar).

**JavaScript** es un **lenguaje orientado a objetos** pero basado en **prototipos**, las clases lo simplifican se pasa a la función prototipal con node.js. <br>

En base a una **función constructora** llamada **animal** la paso a **clase** , porque en este omento la clase no recibe ningún parámetro ( usamos la función constructora para instanciar la clase ). <br>

Si quiero crear otro objeto similar sin tener que copiar y pegar código tenemos las **clases** . <br>

```
class Animal{
  constructor(nombre, genero)´{
    this.nombre=nombre;
    this.genero=genero;
  }
  sonar(){
    console.log('Hago sonidos porque estoy vivo');
  }
  ladrar(){
    console.log('Guaug, guag!');
  }
}
```

Creo un nuevo animal:

```
const mimi = new Animal("Mimi", "Hembra");
      mimi.saludar();
      mimi.sonar();
```

Para hacer la herencia en base a Animal creo Perro. Voy a extender la clase heredada con **extends** y utilizo **super** como método para mandar a llamar al constructor de la clase padre y le voy a agregar el tamaño.

```
class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    super(nombre, genero);
    this.tamanio=tamanio;
  }
  sonar(){
    console.log('Hago sonidos porque estoy vivo');
  }
  ladrar(){
    console.log('Guaug, guag!')
  }
}
```

```
```






```

```


