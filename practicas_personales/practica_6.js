/* Solicita al usuario que elija entre la opción 1 o 2:
Se le debe pedir dos números al usuario e indicar si son pares y múltiplos de 25 ambos, uno de ellos o ninguno.
Se le debe pedir una palabra y comprobar si empieza o termina por a*/

//HACER CON  SWITCH

function puntoInflex() {

    let num1 = parseInt(window.prompt("Di un número:"));
    let num2 = parseInt(window.prompt("Di otro número:"));

    if (num1 % 2 == 0 && num2 % 2 == 0) {
        alert("Ambos son pares");
    }
    else if (num1 % 2 == 0 && num2 != 0) {
        alert("El primer número es par");
    }
    else if (num1 % 2 != 0 && num2 == 0) {
        alert("El segundo número es par");
    }
    else {
        alert("Ningún número es par");
    }

    if ((num1 && num2) < 25) {
        alert("Ninguno es multiplo de 25")
    }

    else if (num1 % 25 == 0) {
        alert(`${num1} múltiplo de 25`);
    }
    else if (num2 % 25 == 0) {
        alert(num2 + "múltiplo de 25");
    }
}


function startOrfinishA() { // y si empieza o termina en a? .toLowerCase()

    let palabra = window.prompt("Di una palabra");
    let result = true;

    if ((palabra[0]) == 'a') {
        result;
        alert("Empieza por a");
    }
    if ((palabra[palabra.length - 1]) == 'a') {
        result;
        alert("Termina en a");
    }
    else {
        !result;
        alert("No empieza ni termina en a");
    }
}
