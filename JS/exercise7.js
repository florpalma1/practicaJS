// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let number1 = parseInt(prompt("Enter a number"));
let number2 = parseInt(prompt("Enter other number"));
let number3 = parseInt(prompt("Enter other number"));

if (number1 > number2 && number1 > number3){
    document.write("The first number entered is the largest")
} else if (number2 > number1 && number2 > number3) {
    document.write("The second number entered is the largest")
} else if (number3 > number1 && number3 > number2){
    document.write("The third number entered is the largest")
} else {
    document.write("All the numbers entered are the same")
}