var parrafos = document.getElementsByTagName("p");
var oracionconsaltos = function(){
    let oracion = document.getElementById("inputoracion").value;
    var textoconsaltos = "";
    for(let i=0;i<oracion.length;i++){
        textoconsaltos += oracion.substring(i,i+1) + ' ';
    }
    parrafos[1].textContent = textoconsaltos;
};
document.getElementById("inputoracion").onkeypress = (event) =>{
            if(event.key === "Enter"){
                oracionconsaltos();
            }
};