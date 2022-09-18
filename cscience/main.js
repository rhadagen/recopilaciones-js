// console.log("hola mundo, soy:");
//code spell checker - idioma. te apoya en indicar errores ortográficos

// function nombreCompleto (nombre, apellido) {
//     var nombre = nombre || "Nombre no definido"
//     var apellido = apellido || "Apellido no definido"
//     return nombre + " " + apellido
// }
// console.log(nombreCompleto("Oswaldo"));
//Fue una manera de realizar una funcion de manera tradicional o desactualizada.

//Aquí una manera más simplificada y actualizada de realizar la función
// function nombreCompleto (nombre, apellido) {
//     return `Que tal soy: ${nombre} ${apellido}`
// }
// console.log(nombreCompleto("Oswaldo", "Genis"));

//Salto de línea 2 maneras.
// console.log("Oswaldo \nGenis");// Una manera
// console.log(`Genis 
// Sánchez`); // Otra manera

//Un ejemplo 
// const parrafo = `
// <div>
// <p>Hola</p>
// </div>
// `
// console.log(parrafo);

// Acceder a un arreglo 
// const lista = [1,2,3,4,5];
// console.log(lista[1]);

//Dos maneras de acceder a valores de un objeto.
// const objeto = {
//     nombre: "Oswaldo",
//     apellido: "Genis",
//     profesion: "Arquitecto"
// }
// console.log(objeto.profesion);

// const objeto = {
//     nombre: "Oswaldo",
//     apellido: "Genis",
//     profesion: "Arquitecto"
// }
// console.log(objeto["apellido"]); //Esta es otra manera de acceder al valor. 

// Manera en la que se utiliza usando (react), misma forma más conveniente para ahorrar cógido, más precisos y actualizados. se llama:
//DESTRUCTURACIÓN
// const objeto = {
//     nombre: "Oswaldo",
//     apellido: "Genis",
//     profesion: "Arquitecto"
// }
//nombre,apellido y profesión se llamarán keys. (llaves)
// const { nombre, profesion } = objeto;
// console.log(nombre, profesion);

// SPREAD OPERATOR (...)
// const objeto = {
//     nombre: "Oswaldo",
//     apellido: "Genis",
//     profesion: "Arquitecto"
// }
// const ricks = {
//     ...objeto,      //spread operator spread = extendida
//     //... los tres puntos jalan las keys y valores de las mismas de otro objeto. 
//     temporadas: [1,2,3,4,5,6,7]
// }
// console.log(ricks);

//SPREAD OPERATOR (...)
//De la siguiente manera se uniran los dos arreglos
//Se pudiera realizar una concatenación peroi esta es una manera más profesional ya que estamos involucrando al arreglo puro.
// const letras = ["A", "B", "C", "D"];
// const numeros = [1, 2, 3, 4];
// console.log([...letras,...numeros]);

//Función que recibe un parametro y retorna un valor en una sola línea
// const nombreCompleto = (names) => {"Arrow function sabe que el valor siguiente de la flecha será un return"};
// console.log(nombreCompleto);
// const objeto3 = {
//     nombre: "Oswaldo",
//     apellido: "Genis",
//     profesion: "Arquitecto",
//         objeto4 : {
//             elemento1: "incluir"
//         },
//     habilidades: ["estudio","lectura","comer"]
//     }
// //De esta forma accedemos a objetos dentro de objetos y a arreglos dentro de arreglos.
//     console.log(objeto3.objeto4.elemento1);
//     console.log(objeto3.habilidades[0]);
