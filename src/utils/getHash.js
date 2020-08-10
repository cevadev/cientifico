/**
 * Funcion que obtiene el hash, esto significa que cuando nos movamos a un personaje a ese detalle
 * vamos a manipular la url (#/id) y debemos obtener dicho id para saber cual es el personaje que estamos
 * accediendo y así enviar el template correcto.
 * Así tambien, si nos estamos moviendo hacia una seccion podemos hacer estos cambios.
 */
const getHash = () =>{
    /**
     * location -> elemento del navegador
     * hash -> obtenemos el hash del elemento location. Hasta aqui el hash retorna el valor '#/1/' ese valor no sirve
     * debemos parsear dicha estructura retornada por el hash ya que nosotros solo necesitamos el '1'
     * slice(1) -> no permite eliminar el primer caracter que seria el #
     * toLocaleLowerCase() -> forzamos a minusculas todo el contenido
     * split('/') -> de la cadena de texto que tenemos hasta ahora (/1/) vamos a quitar los '/'
     * hasta este momento del codigo tenemos: ['', '1', ''] esos valores vacios ('') existen xq antes habian alli '/' slash
     * sin embargo nosotros necesitamos unicamente el id es decir el 1
     * Para ello debemos indicar la posicion del objeto que necesitamos dentro del array, que es la posision 1
     * Por útlimo en el caso que no encuentre ninguna ruta a la cual esta accediendo indicamo con el OR || que solo envie
     * el slash '/'
     */
    localtion.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
}

//exportamos la funciones
export default getHash;