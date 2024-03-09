var limite;
var numerosintroducidos = 0;
var inputnumeros= document.getElementById("inputnumeros");
var numeroactual = document.getElementById("numeroactual");
var inputlimite = document.getElementById("inputlimite");
inputlimite.onkeypress = (event) =>{
    if(event.key === "Enter"){
        if(inputlimite.value == ""){
            alert("Ingrese un numero")
        }
        else if(parseInt(inputlimite.value) < 0){
            alert("Ingrese un numero positivo")
        }
        else{
            limite = parseInt(inputlimite.value);
            document.getElementById("inputdenumeros").style.display = 'unset';
            document.getElementById("temporal").remove();
        }
    }
}
inputnumeros.onkeypress = (event) =>{
    if(event.key === "Enter"){
        if(numerosintroducidos < limite){
            numerosintroducidos += parseFloat(inputnumeros.value);
            numeroactual.textContent= numerosintroducidos;
        }
        else{
            numeroactual.textContent= "Superaste el limite";
        }
    }
}