console.log("hola");

console.log("formulario de validacion");

console.log("document");

var elemento = document.getElementById("mensaje");
console.log(elemento);

var txtNombre = document.getElementById("nombre");
var txtEmail = document.getElementById("nombre");
var txtTelefono = document.getElementById("nombre");

function fctValidacion(){
    var txtNombre = document.getElementById("nombre").value;
    if(txtNombre ===""){
        alert("debes introducir un nombre");
        return;
    }
    var txtEmail = document.getElementById("email").value;
    if(txtEmail ===""){
        alert("debes introducir un email");
        return;
    }



}