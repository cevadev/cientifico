//Este es nuestro archivo de entrada

//importamos nuestras rutas
import router from './routes';

//el objeto window con el event listener estará escuchando (evento load) si algo sucede, en este caso si la carga de la pagina ocrrió
//recordemos que las app SPA carga una sola vez todos los archivos, entonces cuando todo slos archivos esten
//listos y cargados dentro del navegador vamos a invocar el codigo que recibimos.
//Pasamos el evento que debe escuchar como la funcion que importamos de router.
window.addEventListener('load', router);

//Event listener que escucha las rutas, en este caso el hash al cual nos estamos moviendo.
//cuando cambie un hash va a desencadenar una funcion
//asi cuando carga por primera vez nuestra pagina ypara cuando hay un cambio dentro de un hash
window.addEventListener('hashchange', router);