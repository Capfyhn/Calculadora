/*document.getElementById("resultado").innerHTML = "Type name here..";*/
function insert(num) {
    /*document.getElementById("resultado").innerHTML = "";*/


    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    

}

function clean() {

    document.getElementById('resultado').innerHTML = "";


}

function backspace() {

    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {

var resultado = document.getElementById('resultado').innerHTML;
if (resultado) {
    document.getElementById('resultado').innerHTML = eval(resultado)
}

}