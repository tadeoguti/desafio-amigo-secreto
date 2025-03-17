// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    const inputAmigo = obtenerInputAmigo();
    const nombreAmigo = inputAmigo.value.trim();

    if (!esNombreValido(nombreAmigo)) {
        alert("Por favor, inserte un nombre válido.");
        limpiarCampo(inputAmigo);
        return;
    }

    alert("Se agregó el nombre del amigo: " + nombreAmigo);
    amigos.push(nombreAmigo);
    actualizarLista();
    limpiarCampo(inputAmigo);
}

function obtenerInputAmigo() {
    return document.getElementById("amigo");
}

function esNombreValido(nombre){
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return nombre !== "" && regexNombre.test(nombre);
}

function limpiarCampo(input){
    input.value = "";
    input.focus();   
}

function actualizarLista(){
    const listaAmigosUl = document.getElementById("listaAmigos");
    listaAmigosUl.innerHTML = "";

    amigos.forEach(amigos => {
        const li = document.createElement("li");
        li.textContent = amigos;
        listaAmigosUl.appendChild(li);
    });

}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay Amigos agregados para sortear. Ingresa nombres primero.");
        return;
    }

    const indiceRandom = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceRandom];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener('DOMContentLoaded', () => {
    /*document.getElementById("btnAgregar").addEventListener("click",agregarAmigo);
    document.getElementById("btnSortear").addEventListener("click", sortearAmigo);

     // Remover listeners anteriores (si existen)
     btnAgregar.removeEventListener("click", agregarAmigo);
     btnSortear.removeEventListener("click", sortearAmigo);
 
     // Agregar listeners nuevamente
     btnAgregar.addEventListener("click", agregarAmigo);
     btnSortear.addEventListener("click", sortearAmigo);*/

     const btnAgregar = document.getElementById("btnAgregar");
     const btnSortear = document.getElementById("btnSortear");
     
     btnAgregar.addEventListener("click", agregarAmigo);
     btnSortear.addEventListener("click", sortearAmigo);
} );


