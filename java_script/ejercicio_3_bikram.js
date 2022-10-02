//  1.- Crear variable de nombre arrayVacio cuyo valor sea un array vacío

var arrayVacio = [];
console.log(arrayVacio);

//  2.- Crear variable de nombre arrayNumeros declarada con un array de números del 0 al 9 (0, 1, 2...)

var arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//  3.- Crear variable de nombre arrayNumerosPares declarada con un array con los números pares del 0 al 9 (considerando al 0 par)

var arrayNumerosPares = [0, 2, 4, 6, 8];

// 4.- Crear variable de nombre arrayBidimensional declarada con valor array [[0, 1, 2], ['a', 'b', 'c']]

var arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

//  5.- Crea la función suma que acepte como argumento dos números y devuelva el resultado de su suma

function suma(num1,num2) {
    var num1;
    var num2;
    var resultado = num1 + num2;
    console.log(resultado);
}
suma(2,2)

//  6.- Crea la función potenciacion que acepte como argumento dos números y devuelva el resultado de elevar el primero(a) al segundo(b) (a^b)

function potenciacion(num1,num2) {
    var num1;
    var num2;
    var resultado = (num1 ** num2);
    console.log(resultado);
}
potenciacion(2,2)

// 7.- Crea la función separarPalabras que acepte como argumento un string y devuelva un array de palabras 'hola mundo' => [hola, mundo]

function separarPalabras() {
    var string = "hola mundo";
    var array = string.split(' ');
    console.log(array);
}
separarPalabras()

/*// 7.-  Otra forma de hacerlo


function separarPalabras(frase1) {
    let palabra = "";
    let array = [];

    for (i = 0; i < frase1.length; i++) {

        if (frase1[i] != " ") {
            palabra = palabra + frase1[i];
            console.log(palabra)
        } else if (frase1[i] == " " || i - 1 == (frase1.length - 1)) {
            array.push(palabra);
            palabra = "";
        }

    }

    return array

}

console.log(separarPalabras("hola mundo"))*/

//  8.- Crea la función repetirString que acepte como argumento un string y un número y 
// devuelva un string que sea el resultado de concatenar el primer string el número dado de veces.

function repetirString() {
    var string = "hola";
    var num = 2;
    var stringFinal = string.repeat(num); // El método repeat() construye y devuelve una nueva cadena 
    console.log(stringFinal);             // que contiene el número especificado de copias de la cadena en la cual fue llamada, concatenados.
}
repetirString()

//  9.- Crea la función esPrimo que acepte como argumento un número y devuelva true si es primo y false si no lo es.

    function esPrimo(num) {
        
        let i = 2;

        while (i < num - 1) {
            if (num%i == 0) {

                console.log('false');
            } else {
                console.log('true');
            }
            i++;
        }
    }
    esPrimo (7)



//  10.- Crear la función ordenarArray que acepta como argumento un array de números y devuelva un array ordenado de menor a mayor

    function ordenarArray() {
        let array = [9, 5, 2, 4, 1];
        let newArray = array.sort();
        console.log(newArray);
    }
    ordenarArray()

    function ordenarArray() {
        let array = [7, 9, 1, 4, 3, 5, 8];
        let aux;                                 // para el cambio

        for (let i = 0; i < array.length - 1; i++) {
            for (j = 0; j < (array.length - 1) - i; j++) {   // i = 0 >> 0 < 6    i va creciendo => j decreciendo porque se va quedando un numero acomodado
                if (array[j] > array[j + 1]) {                   // i = 1 >> 0 < 5
                    aux = array[j];
                    array[j] = array[j + 1]
                    array[j + 1] = aux;
                }
            }

            console.log(array);
        }
    }
    ordenarArray()


// 11.- Crear la función obtenerPares que acepta como argumento un array de números y devuelva un array con los elementos pares

var array = [2,1,8,4,3,7];

function obtenerPares(array){
      var pares = [];

    for(let i=0; i<array.length; i++){
        if(array[i]%2 == 0){
            pares.push(array[i]);
    
        }
    }
    return pares;
}

console.log(obtenerPares(array));


// 12.-  Crear la función pintarArray que acepte como argumento un array y devuelva una cadena de 
// texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'

function pintarArray () {
    var array = [0, 1, 2];

    console.log(array.join());
}
pintarArray()
console.log('[0, 1, 2]')


// 13.- Crear la función arrayMapi que acepte como argumento un Array y una función y devuelva un 
// array en el que se haya aplicado la función a cada elemento del array

function arrayMapi () {
    let array = [1, 2, 3, 4, 5];
    let dobles = array.map(function(num){
        return num * 2;
    });
    console.log(dobles);
}
arrayMapi()

//  14.- Crear la función eliminarDuplicados que acepte como argumento un array y 
// devuelva un array en el que se hayan eliminado los duplicados

function eliminarDuplicados () {
    let array = [2, 2, 3, 4, 5, 5];
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        
           
    }
}
