var cantnums = 0;
var min = 0;
var max = 0;
var avg = 0;
var primerDatoIntroducido = false;
var inputnumeros = document.getElementById("inputnumeros");
inputnumeros.onkeypress= (event) => {
    if(event.key === "Enter"){
        if(inputnumeros.value != 0){
            if(primerDatoIntroducido === false){
                primerDatoIntroducido= true;
                min = parseFloat(inputnumeros.value);
                max = parseFloat(inputnumeros.value);
                avg = parseFloat(inputnumeros.value);
                cantnums+=1;
            }
            else{
                min = parseFloat(inputnumeros.value) < min ? parseFloat(inputnumeros.value) : min;
                max = parseFloat(inputnumeros.value) > max ? parseFloat(inputnumeros.value) : max;
                avg += Math.abs(parseFloat(inputnumeros.value));
                cantnums +=1;
            }
        }
        else{
            inputnumeros.hidden= true;
            document.getElementById("resultados").hidden= false;
            document.getElementById("nummin").textContent= min;
            document.getElementById("nummax").textContent= max;
            document.getElementById("avg").textContent= (avg / cantnums);
        }
    }
};