var calcularArea = (radio) => Math.PI * Math.pow(radio,2);
var calcularPerimetro = (radio) => 2 * Math.PI * radio;
function Circulo(radio){
    this.radio = radio;
    this.calculararea = calcularArea(this.radio);
    this.calcularperimetro = calcularPerimetro(this.radio);
}
let inputradio = document.getElementsByName("radio");
inputradio[0].onkeypress = (event) => {
    if(event.key === "Enter"){
        let circulo = new Circulo(inputradio[0].value);
        document.getElementById("area").textContent= "Area: "+circulo.calculararea;
        document.getElementById("perimetro").textContent="Perimetro: "+circulo.calcularperimetro;
    }
}