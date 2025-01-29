let nombres = [];


//<button class="button-add" onclick="agregarAmigo()">Añadir</button>
//la función para el botón "añadir" se llama "agregarAmigo()"
function agregarAmigo() { //"agregarAmigo" está definido en el html
    let nuevoAmigo = document.getElementById('amigo').value;
    nombres.push(nuevoAmigo);
    limpiarCaja();
    agregarAListaUl(nuevoAmigo);
console.log(nombres);
console.log(nombres.length);
console.log(nombres[0]);
return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}
//<button class="button-draw" onclick="sortearAmigo()" 
// aria-label="Sortear amigo secreto">
//LA FUNCIÓN PARA EL BOTÓN "SORTEAR AMIGO" SE LLAMA "sortearAmigo()"
function  sortearAmigo() { //"sortearAmigo" está definido en el html
    alert('Hicimos click en el botón "Sortear amigo"');
    return;
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
function agregarAListaUl(item) { //addToList
// Crear un nuevo elemento de lista (<li>)
let nuevoNombre = document.createElement('li');
nuevoNombre.textContent = item;

// Obtener la lista ul y agregar el nuevo elemento
let list = document.getElementById('listaAmigos');
list.appendChild(nuevoNombre);
}

// Agregar algunos elementos a la lista
//agregarALista('Elemento 1');
//agregarALista('Elemento 2');
//agregarALista('Elemento 3');

/*
En este ejemplo, tenemos una función agregarALista() que se encarga de 
crear un nuevo elemento de lista (<li>) y agregarlo a la lista 
desordenada (<ul>) con el ID "listaAmigos".

Cada vez que se llama a la función addToList() con un nuevo elemento, 
se crea un nuevo <li> y se agrega al final de la lista.

Esto hará que los elementos se muestren uno debajo del otro a medida 
que se van agregando.

Puedes llamar a la función addToList() tantas veces como quieras para
 agregar más elementos a la lista. Por ejemplo:

addToList('Elemento 4');
addToList('Elemento 5');
addToList('Elemento 6');

Y la lista se irá actualizando con los nuevos elementos.
*/