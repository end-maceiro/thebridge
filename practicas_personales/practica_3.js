var n1 = window.prompt("Di un número");
var n2 = window.prompt("Di otro número");
var n3 = window.prompt("Di otro número");

if(n1<=n2 && n1<=n3){
    alert("El menor es "+ n1);
}
else if (n2<=n1 && n2<=n3){
    alert("El menor es " + n2);
}
else {
    alert("El menor es " + n3);
}

