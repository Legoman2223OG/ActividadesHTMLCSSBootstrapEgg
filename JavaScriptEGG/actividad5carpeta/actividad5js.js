var tipooperacion = "";
var outputtext = document.getElementById("outputtext");
var operacion= document.getElementById("operacion");
var eleccion = document.getElementById("eleccion");
var num1= document.getElementById("num1");
var num2= document.getElementById("num2");
document.getElementById("opcsum").onclick = () => operacion.value = "S";
document.getElementById("opcres").onclick = () => operacion.value = "R";
document.getElementById("opcdiv").onclick = () => operacion.value = "D";
document.getElementById("opcmul").onclick = () => operacion.value = "M";
operacion.onchange = function(){
    tipooperacion= operacion.value;
    switch(tipooperacion){
        case 'S':
            eleccion.textContent="Suma";
            break;
        case 'R':
            eleccion.textContent="Resta";
            break;
        case 'D':
            eleccion.textContent="Division";
            break;
        case 'M':
            eleccion.textContent="Multiplicacion";
            break;
        default:
            eleccion.textContent="Ninguno";
            break;
    }
}
var enterPresionado = (event) => {
    if(event.key === "Enter"){
        switch(tipooperacion){
            case 'S':
                outputtext.textContent = `${parseInt(num1.value) + parseInt(num2.value)}`;
                break;
            case 'R':
                outputtext.textContent = `${num1.value - num2.value}`;
                break;
            case 'D':
                outputtext.textContent = `${num1.value / num2.value}`;
                break;
            case 'M':
                outputtext.textContent = `${num1.value * num2.value}`;
                break;
            default:
                outputtext.textContent = "";
                break;
        }
    }  
};
num1.onkeypress = enterPresionado;
num2.onkeypress = enterPresionado;