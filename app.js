/*Crear una función que muestre "¡Hola, mundo!" en 
la consola.*/
function saludo (){
    return console.log("¡Hola, mundo!");
}
saludo();
/*Crear una función que reciba un nombre como parámetro 
y muestre "¡Hola, [nombre]!" en la consola.*/
function hola (nombre){
    return console.log(`¡Hola, ${nombre}!`);
}
hola("jose");
/*Crear una función que reciba un número como 
parámetro y devuelva el doble de ese número.*/
function potencia(numero){
    return console.log(numero*numero);
}
potencia(4);
/*Crear una función que reciba tres números como
 parámetros y devuelva su promedio.*/
 function promedio(nu1,nu2,nu3){
     return console.log((nu1+nu2+nu3)/3);
 }
 promedio(3,5,6);
 /*Crear una función que reciba dos números como 
 parámetros y devuelva el mayor de ellos.*/
 function mayor(nu4,nu5){
    return console.log (nu4 > nu5 ? nu4 : nu5 );
 }
 mayor(500,40);
 /*Crear una función que reciba un número como
  parámetro y devuelva el resultado de multiplicar 
  ese número por sí mismo.*/
  function multi(numero){
    return console.log(numero*numero);
  }
  multi(10);
/*calcularPromedio(nota1, nota2, nota3, nota4) => 
Esta función recibe las cuatro notas del estudiante 
como parámetros y devuelve el promedio calculado con 
base en esas notas.*/
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularPromedio(nota1, nota2, nota3, nota4){
    return (nota1+nota2+nota3+nota4)/4;  
}
calcularPromedio(nota1, nota2, nota3, nota4);
/*verificarAprobacion(promedio) => Esta función recibe el 
promedio del estudiante como parámetro y devuelve "Aprobado" 
si el promedio es mayor o igual a 5, en caso contrario, devuelve 
"Reprobado".*/
let promedios = calcularPromedio(nota1, nota2, nota3, nota4);

function verificarAprobacion(promedios){
   return promedios >= 5 ? "Aprobado" : "Reprobado";
}
console.log(verificarAprobacion(promedios));
//ojo console log dentro de una funcion me da = undefined

/*El siguiente código en JavaScript calcula el doble y el triple 
de un número proporcionado. Tu tarea consiste en seleccionar las 
opciones que sigan las mejores prácticas de programación y ayuden 
a mejorar la legibilidad y mantenibilidad del código.*/
let numero = calcularDobleTriple();

function calcularDobleTriple(numero) {
    //let doble = numero * 2;
    //let triple = numero * 3;
    return `El doble de ${numero} es ${numero*2} y el triple es ${numero*3}.`;
    //return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
  }
  console.log(calcularDobleTriple(50));
  /*en terminos de optimizacion de codigo, esta seria una buena respuesta
  para usabilidad deberia dividir las funciones para su uso futuro*/
  let numero1 = 50

  function calcularDoble(numero1){
    return numero1*2;
  }
  function calcularTriple(numero1){
    return numero1*3;
  }
console.log(`El doble de ${numero1} es ${calcularDoble(numero1)} y el triple es ${calcularTriple(numero1)}.`)


const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// Salida: Hola, soy Juan y tengo 30 años.