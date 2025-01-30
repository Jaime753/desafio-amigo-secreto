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
console.log(nombres);
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
    let numAleatorio = Math.floor(Math.random()*nombres.length)-1;
    console.log(numAleatorio);//CORREGIR
    if (numAleatorio < 0) {
        let numAleatorio = numAleatorio + 1 //¿CORREGIR?
    }   else {
    console.log('número aleatorio :' + numAleatorio);
    let amigoSorteado = nombres[numAleatorio];
    agregarAListaUl(textoResultado, amigoSorteado, 'resultado');
    nombres.length = 0;
    return;
}
}

//Función para vaciar cualquier lista <ul>
function vaciarListaUl(idUl){
// Seleccionar el elemento <ul>
let listaUl = document.querySelector(idUl);
//Vaciar el contenido del elemento <ul>
listaUl.innerHTML = ''; 
}



 /*
let numeroAleatorio = generaNumeroAleatorio();
alert(`El número aleatorio es ${numeroAleatorio}`);
*/



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

// FUNCIÓN PARA INFORMAR EL NOMBRE DEL AMIGO SECRETO
//El amigo secreto sorteado es: "nombre"
/*
function informarNombreAmigoSecreto(){
    let resultado = document.getElementById('resultado');
    // Crear un nuevo elemento <li>
    let publicarNombre = document.createElement('li');
    // Establecer el texto de los nuevos elementos <li>
    publicarNombre.textContent = 'Elemento 1';
    // Agregar los nuevos elementos <li> a la lista <ul>
    resultado.appendChild(resultado); 
}
*/