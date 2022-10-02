var frase = window.prompt("Di una  frase");
var letra = window.prompt("Di una  letra");
var cont = 0;

for ( let i=0; i < frase.length; i++)
   if(letra == frase.charAt(i)) {
   cont++;
}

if (cont == 0){
    alert("Tu letra no está en la frase");
}

else { 
    alert ( cont + " vez/veces");
}
