let nombres = [];
let textoResultado = 'El amigo secreto sorteado es: '


//FUNCION PARA el botón "agregarAmigo"
// Agrega amigos a la array "nombres"
function agregarAmigo() { 
    vaciarListaUl('#resultado');
    let nuevoAmigo = document.getElementById('amigo').value;
    if (nuevoAmigo == ""){
        alert('Por favor ingrese un nombre válido');
    } else {
    nombres.push(nuevoAmigo);
    limpiarCaja();
    agregarAListaUl("",nuevoAmigo,'listaAmigos');
return;
}
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

// FUNCIÓN PARA EL BOTÓN "sortearAmigo"
function  sortearAmigo() { 
    vaciarListaUl('#listaAmigos');
    let numAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSorteado = nombres[numAleatorio];
    agregarAListaUl(textoResultado, amigoSorteado, 'resultado');
    nombres.length = 0; // borra los elementos del array
    return;
}

//Función para vaciar cualquier lista <ul>
function vaciarListaUl(idUl){
let listaUl = document.querySelector(idUl);
listaUl.innerHTML = ''; 
}

// Función para agregar un nuevo elemento a cualquier 
//  "lista ul"
function agregarAListaUl(texto, item, idUl) { 
// Crear un nuevo elemento de lista (<li>) 
let nuevoItem = document.createElement('li');
nuevoItem.textContent = texto + item;
// Obtener la lista <ul> y agregar el nuevo elemento
let listaUl = document.getElementById(idUl);
listaUl.appendChild(nuevoItem); //agrega el nuevo nombre
// a la lista <ul>
}
