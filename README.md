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

a.- La función limpiarcaja() se encarga de limpiar la caja "Escribe un nombre" cada vez que se ingresa un nuevo amigo.

b.- La función agregarAListaUl() se encarga de crear un nuevo elemento de lista (<li>) y agregarlo a la lista 
desordenada (<ul>) con el ID "listaAmigos".

Cada vez que se llama a la función agregarAListaUl() con un nuevo elemento, se crea un nuevo <li> y se agrega al final de la lista.

Esto hará que los elementos se muestren uno debajo del otro a medida 
que se van agregando.