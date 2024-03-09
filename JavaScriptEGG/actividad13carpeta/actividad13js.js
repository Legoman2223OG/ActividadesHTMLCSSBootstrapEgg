var listaPersonas = document.getElementById("listaPersonas");
var persona;
function Persona(nombre,edad,sexo,peso,altura){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}
let nombre,sexo;
let altura = 0;
let peso = 0;
let edad = 0;
while(true){
    nombre = prompt("Escriba el nombre de la persona");
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
    let div = document.createElement("div");
    let nombretexto= document.createElement("p");
    let edadtexto= document.createElement("p");
    let sexotexto= document.createElement("p");
    let pesotexto= document.createElement("p");
    let alturatexto= document.createElement("p");
    let titulo = document.createElement("h2");
    titulo.textContent="PERSONA";
    nombretexto.textContent= `Nombre: ${nombre}`;
    edadtexto.textContent= `Edad: ${edad}`;
    sexotexto.textContent= `Sexo: ${sexo}`;
    pesotexto.textContent= `Peso: ${peso}`;
    alturatexto.textContent= `Altura: ${altura}`;
    div.appendChild(titulo);
    div.appendChild(nombretexto);
    div.appendChild(edadtexto);
    div.appendChild(sexotexto);
    div.appendChild(pesotexto);
    div.appendChild(alturatexto);
    listaPersonas.appendChild(div);
    edad= 0;
    sexo= "";
    peso= 0;
    altura= 0;
    if(prompt("Quiere seguir ingresando personas? (S/N)") == "N"){
        break;
    }
}
