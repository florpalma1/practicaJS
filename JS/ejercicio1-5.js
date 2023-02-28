// 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un
//  alert que diga “un mensaje”.
// alert("hola mundo");

// 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que
//  diga «Hello World» (document.write).
document.write("Hello World");

// 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado 
// de sumar 3 + 5.
document.write("<hr>3 + 5 = " + (3+5));

// 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt
//  y escriba un texto que diga «Hola nombreUsuario»
let nombreUsuario = prompt("ingrese su nombre de usuario");
document.write("<hr>Hola " + nombreUsuario);

// 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt

let primerNumero = parseInt(prompt("Ingrese un numero"));
let segundoNumero = parseInt(prompt("Ingrese otro numero"));
let resultado= primerNumero + segundoNumero

document.write("<hr>El resultado de la suma de estos numeros es: " + resultado);