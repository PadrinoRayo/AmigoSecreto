// Selecciona los elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Obtener y limpiar el valor del input
    
    if (nombre) {
        amigos.push(nombre); // Agregar al array
        actualizarLista(); // Mostrar la lista actualizada
        inputAmigo.value = ""; // Limpiar el input
    } else {
        alert("Por favor, ingrese un nombre válido.");
    }
}

// Función para actualizar la lista de nombres en pantalla
function actualizarLista() {
    listaAmigos.innerHTML = ""; // Limpiar la lista
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigos[indiceAleatorio]}</strong> 🎉</li>`;
    } else {
        resultado.innerHTML = "<li>No hay nombres para sortear.</li>";
    }
}
