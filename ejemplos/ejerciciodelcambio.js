function inicializarEfectivo(c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001) {

    return [c500, c200, c100, c50, c20, c10, c5, c2, c1, c05, c02, c01, c005, c002, c001, 0];
}

function calcularTotal(efectivo, billetesMonedas) {
    //var total = 0;
    //efectivo.push(0); //le añadimos el 0 a la ultima casilla del array de efectivo en vez de declarar otra variable
    efectivo[efectivo.length - 1] = 0
    for (let i = 0; i < efectivo.length - 1; i++) {
        //total = total + efectivo[i] * billetesMonedas[i];         // varias formas de hacer lo mismo
        //total += efectivo[i] * billetesMonedas[i];
        efectivo[efectivo.length - 1] += efectivo[i] * billetesMonedas[i];
    }

    //[efectivo.length - 1] esto representa la ultima casilla del array, simplemente la seleccionamos
    efectivo[efectivo.length - 1] = Math.round((efectivo[efectivo.length - 1] + Number.EPSILON) * 100) / 100; //para redondear a dos decimales
    //efectivo.push(total);

    return efectivo;
}
function actualizarCaja(caja, pago) {
    for (let i = 0; i < caja.length; i++) {
        if (pago[i] > 0) {
            caja[i] += pago[i]
        }
    }
    return caja
}
var caja = inicializarEfectivo(1, 5, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1);
const billetesMonedas = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
caja = calcularTotal(caja, billetesMonedas);

// alert(caja);

var precio = 500;
var pago = inicializarEfectivo(4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
pago = calcularTotal(pago, billetesMonedas);


//alert(pago);
if (pago[pago.length - 1] - precio == 0) {
    alert('Importe exacto');
    caja = actualizarCaja(caja, pago)
    alert(caja)
} else {
    alert(pago[pago.length - 1] - precio);
    var devolver = pago[pago.length - 1] - precio
    if (devolver > caja[caja.length - 1]) {
        alert("No tenemos cambio")
    } else {
        var cambio = inicializarEfectivo(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)

        for ( .....)    // ver en video para que es este for, con esto comprobamos todas las casillas (500,200,...)


        if (caja[i] * billetesMonedas[i] >= devolver) {    //lO QUE TENGO EN CAJA ES MAYOR QUE LO QUE TRNGO QUE DEVOLVER
            cambio[i] = Math.floor(devolver / billetesMonedas[i]);  // CUANTOS BILLETAS TENGO QUE ENTREGAR
            caja[i] -= cambio[i]  // LE QUITO A LA CAJA Y SE LO DOY AL CAMBIO
        } else {
            cambio[i]= devolver[i];  // le damos al cambio todo lo que tenemos en caja 
            caja[i]= 0;  
        }
        caja = calcularTotal(caja, billetesMonedas);
        cambio = calcularTotal(cambio, billetesMonedas);
    }

}











    
    



