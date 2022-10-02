//Suma o resta (según elija el usuario) dos números reales

var num1 = parseInt(window.prompt("Di un número"));
var operacion =window.prompt("Elige sumar o restar (+/-): ");
var num2 = parseInt(window.prompt("Di otro número"));
var resultado;

if (operacion == `+`){
    resultado = num1 + num2;
    alert("Resultado es " + (resultado));
}
else {
    resultado = (num1 - num2);
    alert(resultado);
}

