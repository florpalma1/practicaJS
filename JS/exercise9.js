// 9- Escribe un programa que pida una frase y escriba las vocales que aparecen

// Pedir al usuario que introduzca una frase
let frase = prompt("Por favor introduzca una frase");

// Declarar una variable para contar el número de vocales
let contadorVocales = 0;

// Recorrer cada letra de la frase introducida
for (let i = 0; i < frase.length; i++) {
  // Obtener la letra actual
  let letra = frase[i].toLowerCase();

  // Comprobar si la letra es una vocal
  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    contadorVocales++;
  }
}

// Mostrar el número de vocales encontradas
alert("La frase introducida tiene " + contadorVocales + " vocales.");