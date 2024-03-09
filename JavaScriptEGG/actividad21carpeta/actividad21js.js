function Persona(nombre,edad,sexo,peso,altura){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
};
document.getElementById("nomobj").textContent = Persona.name;
let nombre = prompt("Introduzca el nombre de la persona: ");
let edad = 0;
let sexo = "";
let peso = 0;
let altura = 0;
while(edad <= 0 || isNaN(edad)){
    edad = prompt("Escriba la edad de la persona");
}
while(sexo != "H" ^ sexo != "M" ^ sexo != "O"){
    sexo = prompt("Escriba el sexo de la persona H para Hombre, M para Mujer y O para otro");
}
while(peso <= 0 || isNaN(peso)){
    peso = prompt("Escriba el peso de la persona");
}
while(altura <= 0 || isNaN(altura)){
    altura = prompt("Escriba la altura de la persona");
}
persona = new Persona(nombre,edad,sexo,peso,altura);
for(let dato in persona){
    let datoP = document.createElement("p");
    datoP.textContent = dato + ": " + persona[dato];
    document.body.appendChild(datoP);
}