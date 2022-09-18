const costoBoleto = 90;

document.getElementById("boton").addEventListener("click", resultado)
function resultado (){
    let calculo = precioBoleto();
    document.getElementById("resultado").innerHTML = '<div class="alert alert-info" role="alert">' + "El precio total será de: $" + calculo +" MXN."+'</div>'
}
//Para acumular resultados de distintos calculos podré utilizar ...innerHTML += y de esta forma añadirá los resultados del calculo en pantalla.
// CSS Y ESTILOS 
function precioBoleto() {
    let personas = document.getElementById("input").value
    personas = Number(personas);
    let dia = document.getElementById("select").value
    let total = 0;

    if (dia == "Martes") {
        total = costoBoleto * personas / 2;
    } else {
        total = costoBoleto * personas;
    } return total;
} 