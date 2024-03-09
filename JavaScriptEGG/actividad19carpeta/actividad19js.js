let tablas = document.getElementsByTagName("table");
let arrayA = [];
let arrayB = [];
for(let i=0;i<50;i++){
    let numAleat= parseFloat(Math.random() * 10);
    arrayA.push(numAleat);
}
arrayA.sort();
let cantElementosPuestos = 0;
let tablerow = document.createElement("tr");
do{
    cantElementosPuestos++;
    let tabledata = document.createElement("td");
    tabledata.textContent = arrayA[(cantElementosPuestos-1)];
    tablerow.appendChild(tabledata);
    if(cantElementosPuestos % 10 == 0){
        tablas[0].appendChild(tablerow);
        tablerow = document.createElement("tr");
    }
}while(cantElementosPuestos <50);
for(let i=0;i<10;i++){
    arrayB.push(arrayA[i]);
}
for(let i=9;i<20;i++){
    arrayB.push(0.5);
}
cantElementosPuestos = 0;
tablerow = document.createElement("tr");
do{
    cantElementosPuestos++;
    let tabledata = document.createElement("td");
    tabledata.textContent = arrayB[(cantElementosPuestos-1)];
    tablerow.appendChild(tabledata);
    if(cantElementosPuestos % 10 == 0){
        tablas[1].appendChild(tablerow);
        tablerow = document.createElement("tr");
    }
}while(cantElementosPuestos <20);