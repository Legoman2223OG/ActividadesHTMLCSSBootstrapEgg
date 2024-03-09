var parrafos = document.getElementsByTagName("p");
document.getElementById("inputpalabra").onkeypress = (event) =>{
    if(event.key === "Enter"){
        let palabrainvertida = "";
        for(let i=palabra.length; i>0;i--){
            palabrainvertida += palabra.substring(i-1,i);
        }   
        parrafos[1].textContent = palabrainvertida;
    }
};