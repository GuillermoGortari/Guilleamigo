// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//array amigos
let amigos = [];

let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

// Agrega nombre a array amigos[] 
function agregarAmigo(){

    let inputNombre = document.getElementById('amigo').value;    //se agrega nombre ingresado
    if( !(inputNombre == null || inputNombre.length == 0 || /^\s+$/.test(inputNombre)) ) { 
        amigos.push(inputNombre);
        mostrarListaAmigo();
        }

    if (inputNombre =='') {
            alert('Por favor, ingrese un nombre')
            return;
        } 
        
    limpiarCampo();
    return;
}

// Actualiza la lista de amigos, creando elementos <li> para cada uno.
function mostrarListaAmigo() {

    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    for (let index = 0; index < amigos.length; index++) {
      const elemento = amigos[index];

      let listaHTML = document.createElement("li");
      listaHTML.textContent = elemento;
      listaAmigos.appendChild(listaHTML);
    }

}

// Limpiar el campo ingreso de nombre
function limpiarCampo() {

    document.querySelector('#amigo').value = '';
    return;

}

// Sortea del amigo secreto (random).
function sortearAmigo() {

    let random = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[random];
    ulResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
    return;

}
