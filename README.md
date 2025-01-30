<h1>Desafio del amigo secreto</h1>

- Descripción de la app: Se diseñará  un programa que ejecute una aplicación llamada "Amigo secreto".

El usuario deberá ingresar a los amigos y amigas que participarán del sorteo para definir cuál será el amigo secreto.

Luego de esto, la app escogerá al azar y entregará un único nombre de todos los ingresados, el qué será definido como el amigo secreto.

- Desarrollo del proyecto:

Paso 1: Se declara una variable de tipo array (arreglo o lista), que almacenará los nombres de los amigos y amigas ingresados en la app.
    let nombres = [];

Paso 2: Se crea la función agregarAmigo()
Esta función se encarga de comprobar que los nombres sean válidos y luego los incorpora al array "nombres"

Dentro del bloque de la función agregarAmigo() se encuentran estas otras funciones:

a.- La función limpiarcaja() se encarga de limpiar la caja o campo "Escribe un nombre" cada vez que se ingresa un nuevo amigo.

b.- La función agregarAListaUl() se encarga de crear un nuevo elemento de lista "li" y agregarlo a la lista desordenada "ul" con el id "listaAmigos". 

Cada vez que se llama a la función agregarAlistaUl() con un nuevo elemento, se crea un nuevo "li" y se agrega al final de la lista, lo que hace que los elementos se muestren uno debajo del otro a medida que se van agregando.

También se agraga un "alert" para indicar que se ingreso un nombre vacio, si ese es el caso.

Paso 3: Se crea la función sortearAmigo()
Esta función vacía la lista (ul) de amigos (listaAmigos) y luego genera un número seudo aleatorio entre 0 y el largo de la array nombres[]-1, es decir, entre 0 y la cantidad "n-1" de elementos del array.
Este número seudo aleatorio indicará la posición del elemento del array que será sorteado como el amigo secreto (amigoSorteado) de entre todos los  nombres del array.

        let amigoSorteado = nombres[numAleatorio]

Con el nombre del amigo secreto, se corrre la función agregarAListaUl() pero con el id 'resultado'. Esto hace que se publique en la pantalla el nombre del amigo sorteado como amigo secreto.

Finalmente se borran los elementos del array nombres[] y la aplicación queda lista para recibir otra lista de amigos y realizar el sorteo respectivo.

Fin del desafio.

