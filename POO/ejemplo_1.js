/*class Rombo {
    constructor (dim1, dim2) {
        this.dim1 = dim1;
        this.dim2 = dim2;
    }
}

get dimDim () {
    return "Dim1: "this.dim1 +" Dim2: "+this.dim2"
}

const r = new Dibujo (4,10);*/

/*var dim1 = 4;
var dim2 = 10;
var espacio = ""*/

    let dimension1 = 4
    let dimension2 = 10
    let total = "";
    let space = dimension1 - 1;

    for (let i = dimension1; i <= dimension2; i += 2) {   //linea 
        for (let j=0; j<space ; j++) {                     //espacios
            total += " ";
    }
        space--;

        for ( let k=0; k<i ; k++){                  //dibujamos *
        total += '*';
    }

    total += '\n'
}
 
    // Espabila Tonto! no puedes reiniciar en 0 space, porque la linea con 10 "*" ya esta pintada, sino pasaria el bucle 2 veces
    space = 1

    for (let i = dimension2 - 2; i>= dimension1; i -= 2 ) {   //linea desde 8 a 4 (Preg Maria para no poner los numeros)
        for (let j=0; j<space ; j++) {                     //espacios
            total += " ";
    }
        space++;

        for ( let k=0; k<i ; k++){                  //dibujamos *
        total += '*';
    }

    total += '\n'
}

console.log(total)

/*var dimension1 = 8;
var dimension2 = 50;
var rombo = '';
var romboArriba = '';
var romboAbajo = '';
var espacio = '';
var contador = dimension2;

function construirRomboArriba() {
    for (let i = dimension1; i <= dimension2; i += 2) {
        for (let k = 0; k < contador; k++) {
            romboArriba += ' ';
        }
        contador--;

        for (let j = 0; j < i; j++) {
            romboArriba += '+';
        }
        romboArriba += '\n';
    }
    return romboArriba;
}

function construirRomboAbajo() {
    for (let i = dimension2 - 2; i >= dimension1; i -= 2) {
        for (let k = contador + 2; k > 0; k--) {
            romboAbajo += ' ';
        }
        contador++;

        for (let j = 0; j < i; j++) {
            romboAbajo += '+';
        }
        romboAbajo += '\n';
    }
    return romboAbajo;
}

function construirRombo() {
    construirRomboArriba();
    construirRomboAbajo();
    rombo = romboArriba + romboAbajo;

    return rombo;
}

console.log(construirRombo());*/

