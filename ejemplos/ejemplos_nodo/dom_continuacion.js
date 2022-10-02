
function muestra() {

    //1.1 Ocultar el enlace de Seguir leyendo.

    var enlace1 = document.getElementById ('enlace1');
    enlace1.className='oculto';                               //.className le agregamos una clase

    //1.2 Mostrar el texto incluido dentro del span

    var adicional = document.getElementById("adicional");
    adicional.className = "visible";
    var enlace2 = document.getElementById ('enlace2');
        enlace2.className='visible';

}

    //2.1 Crear un nuevo evento en el enlace2 que llamará a la función oculta().

/*function agregar() {
    let a = document.getElementById("enlace2");
    enlace2.onclick ='ocultar';
}*/

/*window.onload = () => {
    var numEnlaces = document.getElementsByTagName("a").length; //buscamos todos los enlaces a
    for ( let i=1 ; i<=numEnlaces; i++) {
        document.getElementById("enlace_" + i).setAttribute("onclick","muestraOculta("+i+")"); 

    //2.2 Dicha función ocultará el enlace2, el texto span y volverá a mostrar el enlace seguir leyendo

    function ocultar() {
        var enlace2 = document.getElementById ('enlace2');
        enlace2.className='oculto';
        var adicional = document.getElementById("adicional");
        adicional.className = "oculto";
        var enlace1 = document.getElementById ('enlace1');
        enlace1.className='visible';
    }
      