// Devuelve True si es primo y False si no. 
function es_primo(num){
    var i=2;
    while(num%i != 0){
        i++;
    }
    return i==num;
}

//alert(es_primo(4));
//alert(es_primo(7));
//if(es_primo(7)) {
//    alert("El 7 es primo");
//}

function primos_rango (max) {     //guardo todos los primos entre el 2 y el menor numero de la fraccion // max es el mayor del rango
    var resultado = [];
    for (let i=2; i<=max; i++){
        if (es_primo(i)){
            resultado.push(i);
        }
    }
    return(resultado);
}

//alert(primos_rango(14));


function es_simplificable(num,den){   //puedo llamar num como en es_primo porque los nombres de lo sparametros estan vivos solo cuando se ejecuta la funcion
    return !(num != den && es_primo(num) && es_primo(den) || (num == 1 || den == 1)); 
}

/*alert (es_simplificable(13,29));
alert (es_simplificable(17,20));
alert (es_simplificable(15,37));
alert (es_simplificable(1000,10));
alert (es_simplificable(13,13));*/


function simplificar(num,den){
    if(es_simplificable(num,den)) {
        var rango = [];
        if(num<den){
            rango = primos_rango(num);
        }else {
            rango = primos_rango(den);
        }

        

    }
    return [num,den]; //si no es simplicable devuelvo el array


}