// 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let number1 = parseInt(prompt("Enter a number"));
let number2 = parseInt(prompt("Enter other number"));

if(number1 > number2){
    document.write("The first number entered is the largest")
} else if (number1 === number2){
    document.write("Both number entered are the same")
} else {
    document.write("The second number entered is the largest")
};


