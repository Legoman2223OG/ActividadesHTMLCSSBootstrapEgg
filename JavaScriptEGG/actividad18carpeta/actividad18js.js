var valores = [true, 5, false, "hola", "adios", 2];
var conseguirTextoMayor = () => valores.filter(elem => typeof elem == "string").find((x,y) => x.length > y.length ? x : y);
var ponerTextoCondicion = condicion => condicion ? "Este resultado es verdadero" : "Este resultado es falso";
var sumatoria = (num1,num2) => num1 + num2;
var resta = (num1,num2) => num1 - num2;
var division = (num1,num2) => num1 / num2;
var multiplicacion = (num1,num2) => num1 * num2;

document.getElementById("mayortext").textContent = conseguirTextoMayor();
document.getElementById("verd").textContent = ponerTextoCondicion(valores[0]);
document.getElementById("fals").textContent = ponerTextoCondicion(valores[2]);
document.getElementById("suma").textContent = sumatoria(valores[1],valores[5]);
document.getElementById("resta").textContent = resta(valores[1],valores[5]);
document.getElementById("div").textContent = division(valores[1],valores[5]);
document.getElementById("mul").textContent = multiplicacion(valores[1],valores[5]);