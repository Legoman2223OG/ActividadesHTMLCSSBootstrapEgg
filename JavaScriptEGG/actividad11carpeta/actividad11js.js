var outputtexto = document.getElementById("outputtexto");
var inputoracion = document.getElementById("inputoracion");
var encontrarPalabraMasGrande = function(o){
    palabragrande = "";
    var palabras = o.replace(","," ").split(" ");
    palabras.forEach(palabra => {
    if(palabra.length > palabragrande.length){
        palabragrande = palabra
    }
    });
    return palabragrande;
}
inputoracion.onkeypress = event => {
    if(event.key === "Enter"){
        outputtexto.textContent = encontrarPalabraMasGrande(
            inputoracion.value
        );
    }
}