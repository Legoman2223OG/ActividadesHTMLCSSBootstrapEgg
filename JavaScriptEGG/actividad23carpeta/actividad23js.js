let parrafo = document.getElementById("parrafo");
var remarcarPalabrasDeLongitud = longitud =>{
    let textoremarcado = "";
    let palabraremarcada = "";
    let palabras = parrafo.textContent.split(" ");
    palabras.forEach(palabra => {
        if(palabra.length >= longitud){
            palabraremarcada = "<span class='textoconremarcado'>" + palabra + "</span>";
        }
        else{
            palabraremarcada = palabra;
        }
        textoremarcado += palabraremarcada + " ";
    })
    return textoremarcado;
};
parrafo.innerHTML = remarcarPalabrasDeLongitud(8);