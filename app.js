let nombres = [];


//FUNCION PARA el botón "agregarAmigo"
// Agraga amigos a la array "nombres"
function agregarAmigo() { 
    let nuevoAmigo = document.getElementById('amigo').value;
    if (nuevoAmigo == ""){
        alert('Por favor ingrese un nombre válido');
    } else {
    nombres.push(nuevoAmigo);
    limpiarCaja();
    agregarAListaUl(nuevoAmigo);
console.log(nombres);
console.log(nombres.length);
console.log(nombres[0]);
return;
}
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

// FUNCIÓN PARA EL BOTÓN "sortearAmigo"
function  sortearAmigo() { //"sortearAmigo" está definido en el html
    alert('Hicimos click en el botón "Sortear amigo"');
    vaciarListaUl('#listaAmigos');
    return;
}

//Función para vaciar cualquier lista <ul>
function vaciarListaUl(elemento){
// Seleccionar el elemento <ul>
let listaUl = document.querySelector(elemento);
listaUl.innerHTML = ''; //Vaciar el contenido del elemento <ul>
}


//FUNCIÓN PARA AGREGAR UN NÚMERO ALEATORIO
/*
function generaNumeroAleatorio() {
    return Math.floor(Math.random()*10)+1;
}
let numeroAleatorio = generaNumeroAleatorio();
alert(`El número aleatorio es ${numeroAleatorio}`);
*/


//<ul id="myList"></ul> ("myList" = "listaAmigos")

// Función para agregar un nuevo elemento a la "lista ul"
function agregarAListaUl(item) { 
// Crear un nuevo elemento de lista (<li>) 
let nuevoNombre = document.createElement('li');
nuevoNombre.textContent = item;
// Obtener la lista <ul> y agregar el nuevo elemento
let listaUl = document.getElementById('listaAmigos');
listaUl.appendChild(nuevoNombre); //agrega el nuevo nombre la lista <ul>
}

// función para informar el nombre del amigo secreto
//El amigo secreto sorteado es: "nombre"