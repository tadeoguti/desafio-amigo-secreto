const IDS = {
    INPUT_AMIGO: "amigo",
    LISTA_AMIGOS: "listaAmigos",
    RESULTADO: "resultado",
    BTN_ADICCIONAR: "btnAdiccionar",
    BTN_SORTEAR: "btnSortear",
    BTN_REINICIAR: "btnReiniciar"
};

let amigos = [];

function obtenerInputAmigo() {
    return document.getElementById(IDS.INPUT_AMIGO);
}

function esNombreValido(nombre) {
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return nombre !== "" && regexNombre.test(nombre);
}

function limpiarCampo(input) {
    input.value = "";
    input.focus();
}

function agregarAmigo() {
    const inputAmigo = obtenerInputAmigo();
    const nombreAmigo = inputAmigo.value.trim();

    if (!esNombreValido(nombreAmigo)) {
       alert("Por favor, inserte un nombre válido.");
        limpiarCampo(inputAmigo);
        return;
    }
    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
        limpiarCampo(inputAmigo);
        return;
    }

    alert("Se agrego el nombre del amigo: " + nombreAmigo);
    amigos.push(nombreAmigo);
    actualizarLista();
    limpiarCampo(inputAmigo);
}

function actualizarLista() {
    const listaAmigosUl = document.getElementById(IDS.LISTA_AMIGOS);
    listaAmigosUl.innerHTML = "";

    const fragment = document.createDocumentFragment();

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        fragment.appendChild(li);
    });

    listaAmigosUl.appendChild(fragment);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos agregados para sortear. Ingresa nombres primero.");
        return;
    }

    const indiceRandom = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceRandom];

    const resultadoUl = document.getElementById(IDS.RESULTADO);
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}
function reiniciarSorteo(){
    // Vaciar el arreglo de amigos
    amigos = [];

    // Limpiar la lista de amigos en la interfaz
    const listaAmigosUl = document.getElementById(IDS.LISTA_AMIGOS);
    listaAmigosUl.innerHTML = "";

    // Limpiar el resultado del sorteo en la interfaz
    const resultadoUl = document.getElementById(IDS.RESULTADO);
    resultadoUl.innerHTML = "";

    // Limpiar el campo de entrada
    const inputAmigo = obtenerInputAmigo();
    limpiarCampo(inputAmigo);

    alert("El sorteo ha sido reiniciado.");
}

document.addEventListener('DOMContentLoaded', () => {
    const btnAdiccionar = document.getElementById(IDS.BTN_ADICCIONAR);
    const btnSortear = document.getElementById(IDS.BTN_SORTEAR);
    const btnReiniciar = document.getElementById(IDS.BTN_REINICIAR);

    btnAdiccionar.addEventListener("click", agregarAmigo);
    btnSortear.addEventListener("click", sortearAmigo);
    btnReiniciar.addEventListener("click", reiniciarSorteo);
});