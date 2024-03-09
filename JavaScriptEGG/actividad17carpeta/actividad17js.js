var vectornum = [];
let tdheader = document.getElementsByTagName("th");
let cantNumeros = parseInt(Math.random() * 10) + 2;
tdheader[0].setAttribute('colspan',cantNumeros);
tdheader[1].setAttribute('colspan',cantNumeros);
for(let i=0; i < cantNumeros;i++){
    let numeroAleat = parseInt(Math.random() * 10);
    vectornum.push(numeroAleat);
}
console.log(cantNumeros);
var rellenarTabla = (idrow,vector) => {
    let row = document.getElementById(`${idrow}`);
    for(let numero of vector){
        let tabledata = document.createElement("td")
        tabledata.textContent = numero;
        row.appendChild(tabledata);
    }
}
rellenarTabla("arrayog",vectornum);
vectornum.pop();
vectornum.pop();
rellenarTabla("arraymod",vectornum);
