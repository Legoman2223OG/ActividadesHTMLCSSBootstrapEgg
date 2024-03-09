var vector1 = [];
var vector2 = [];
for(let i=0;i<5;i++){
    let valrandom1= parseInt(Math.random() * 10);
    let valrandom2= parseInt(Math.random() * 10);
    vector1.push(valrandom1);
    vector2.push(valrandom2);
}
var rellenarTabla = (idrow,vector) => {
    let row = document.getElementById(`${idrow}`);
    for(let numero of vector){
        let tabledata = document.createElement("td")
        tabledata.textContent = numero;
        row.appendChild(tabledata);
    }
}
rellenarTabla("vec1",vector1);
rellenarTabla("vec2",vector2);