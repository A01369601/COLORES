var muestrario;
var colorPredeterminado = "#ff5000";

window.addEventListener("load", startup, false);

function startup() {
    muestrario = document.querySelector("#muestrario");
    muestrario.value = colorPredeterminado;
    muestrario.addEventListener("input", actualizarPrimero, false);
    muestrario.addEventListener("change", actualizarTodo, false);
    muestrario.select();
}

function actualizarPrimero(event) {
    var p = document.querySelector("p");
  
    if (p) {
      p.style.color = event.target.value;
    }
} 

function actualizarTodo(event) {
    document.querySelectorAll("p").forEach(function(p) {
      p.style.color = event.target.value;
    });
}

