//1. Creamos una funcion para que cuando pinche se oculte

function muestraOculta(num) {          //parametro num para saber si es 1,2,3 que es como esrta en el HTML
    var parrafo = document.getElementById("contenidos_" + num);  //asi lo hago generico y puedo coger todos segun el num que ponga
    var enlace = document.getElementById("enlace_" + num);                                              // el texto del enlace cambia por eso establecemos variable

    if (parrafo.style.visibility == "" || parrafo.style.visibility == "visible") {   //buscar difer. entre visibily y display NO HAY ATRIBUTO ENTONCES ESTA VACIO (Ver elementos) ==> Si no se pone STYLE esta vacio
        parrafo.style.visibility = "hidden"; 
        enlace.innerText = "Mostrar contenido";  // Con innerText cambiamos el enlace
    }
    else {
        parrafo.style.visibility = "visible"; 
        enlace.innerText = "Ocultar contenido";

    }

}

//añadimos funcion muestraOcultan al enlace

window.onload = () => {
    var numEnlaces = document.getElementsByTagName("a").length; //buscamos todos los enlaces a
    for ( let i=1 ; i<=numEnlaces; i++) {
        document.getElementById("enlace_" + i).setAttribute("onclick","muestraOculta("+i+")"); 

    }

}

/* // función que sirve para ocultar y mostrar
function muestraOculta(num) {
    var parrafo = document.getElementById("contenidos_" + num);
    var enlace = document.getElementById("enlace_" + num);
    if (parrafo.style.visibility == "" || parrafo.style.visibility == "visible") {
        parrafo.style.visibility = "hidden";
        enlace.innerText = "Mostrar contenido";
    }
    else {
        parrafo.style.visibility = "visible";
        enlace.innerText = "Ocultar contenido";
    }
}

window.onload = () => {
    var numEnlaces = document.getElementsByTagName("a").length;
    for(let i=1; i <=numEnlaces; i++) {
        document.getElementById("enlace_" + i).setAttribute("onclick", "muestraOculta("+ i +")");
    }
}*/