var listalibros = [];
let botonenviar = document.getElementById("botonenviar");
let isbninput = document.getElementById("isbn");
let tituloinput = document.getElementById("titulo")
let autorinput = document.getElementById("autor");
let paginasinput = document.getElementById("paginas");
function Libro(isbn,titulo,autor,paginas){
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
};
var verificarISBN = function(isbncodigo){
    for(let libro of listalibros){
        if(libro.isbn == isbncodigo){
            return true;
        }
    }
    return false;
};
var enviarlibro = function(){
    let libro = new Libro(isbninput.value, tituloinput.value, autorinput.value, paginasinput.value);
    if(verificarISBN(libro.isbn)){
        document.getElementById("perrorisbn").hidden = false;
        document.getElementById("errorisbn").textContent = libro.isbn;
    }
    else{
        document.getElementById("perrorisbn").hidden = true;
        if(isbninput.value != "" &&
        tituloinput.value != "" && autorinput.value != "" && paginasinput.value != ""){
            let elemdiv = document.createElement("div");
            let elemh2 = document.createElement("h2");
            let elempisbn = document.createElement("p");
            let elempautor = document.createElement("p");
            let elemppaginas = document.createElement("p");
            elemdiv.className = "libro";
            elemh2.textContent = libro.titulo;
            elempisbn.textContent = "ISBN: " + libro.isbn;
            elempautor.textContent = "Autor: " + libro.autor;
            elemppaginas.textContent = "Paginas: " + libro.paginas;
            elemdiv.appendChild(elemh2);
            elemdiv.appendChild(elempisbn);
            elemdiv.appendChild(elempautor);
            elemdiv.appendChild(elemppaginas);
            document.getElementById("ubicacionlibros").appendChild(elemdiv);
            listalibros.push(libro);
        }
        else{
            alert("Debe ingresar datos");
        }
    }
};
botonenviar.onclick = enviarlibro;