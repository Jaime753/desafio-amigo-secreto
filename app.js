let nombres = [];
console.log(nombres);


//<button class="button-add" onclick="agregarAmigo()">Añadir</button>
//la función para el botón "añadir" se llama "agregarAmigo()"
function agregarAmigo() { //"agregarAmigo" está definido en el html
    let nuevoAmigo = document.getElementById('amigo').value;
    nombres.push(nuevoAmigo);
console.log(nombres);
console.log(nombres.length);
console.log(nombres[2]);
return;
}

function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
asignarTextoElemento('u1',nuevoAmigo);

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