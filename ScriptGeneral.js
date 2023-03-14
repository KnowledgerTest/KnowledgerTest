//respuestas
let correctas = [2, 4, 2, 1, 1];

let opcion_elegida=[];

let cantidad_correctas=0;
//seleccionar la respuesta

function respuesta(num_pregunta, seleccionada){

    opcion_elegida[num_pregunta]=seleccionada.value;

    id="b" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";
    labels[9].style.backgroundColor = "white";

    seleccionada.parentNode.style.backgroundColor = "none";
}
//para mostrar las correctas
function corregir(){
    cantidad_correctas=0;
    for(i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML= cantidad_correctas;
}