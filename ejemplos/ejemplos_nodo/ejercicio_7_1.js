// número de enlaces que hay

/*function parrafos () {

    var contador = 0;
    var enlaces = document.getElementsByTagName("a");

    for (i = 0; i < enlaces.length; i++) {
        contador ++; //alert(document.getElementsByTagName("a").length); y no declaro contador, de esta manera estoy guardando todos los 1 en memoria.
    }
        alert (contador);  
    }
parrafos()*/



// Dirección que enlaza en penúltimo enlace.

/*function penEnlace () {
    var enlaces = document.getElementsByTagName("a");
    var pen_enl = enlaces[enlaces.length-2].href;         lo guardo en una variable para que no tenga que buscar siempre. 
    alert(pen_enl);                                       //.href se puede poner aqui
}*/                                                       //.href para acceder una vez digo cual "a"


// Número de enlaces que enlazan a http://prueba

/*var number_of_links_to = 0;
for(let i=0; i<links.length; i++){
    if (links[i].href == "http://prueba/"){
        number_of_links_to++;
    }
}
console.log("Numero de enlaces que enlazan a http://prueba/: "+ number_of_links_to);
10:43
var links = document.getElementsByTagName("a");*/

// Número de enlaces del tercer párrafo

function enlacesTercerParrafo () {
    var contador = 0;
    var parrafos = document.getElementsByTagName("p");
    console.log(parrafos);
    var enlaces = parrafos[parrafos.length-1].getElementsByTagName("a");
    console.log(enlaces);
    alert(enlaces.length);

}
enlacesTercerParrafo()