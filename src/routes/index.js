//Archivo para el manejo de las rutas de templates y pages dentro de nuestra app
//nos novemos hacia la carpeta src por ello usamos ../
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolverRoute from '../utils/resolveRoutes';

//mediante routes el objeto  establecemos las rutas que necesita al app
const routes = {
    /**
     * Primera ruta es el '/' que hara render del Home
     * Segunda ruta es '/:id' id es un valor dinamico, es decir, segun el id que se pase, es la sesscion que se mostrara
     */
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}


//Creamos nuestro manejador de rutas el router- El router se encarga de mostrar los elementos según la lógica que
//especificamos.
//Utilizamos async/ await  porque queremos esperar hasta que algo este sucediendo para entonces seguir continuando
//con el bloque de nuestra app
const router = async()=>{
    /**
     * establecemos los templates hacia un elemento de DOM. Lo que significa que nuestro archivo en public/index.html
     * generamos 2 elementos header con su id y el elemento section con id content por lo que el render que realizaremos
     * será a estas secciones del index.html.
     */
    //definimos unas constantes para saber donde realizar el render. Si no lo encuentra pasamos null  o la constante
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    //mandamos el template de header hacia la vista header en el index.html. con el await decimos que lo que
    //pueda tardar del render suceda.
    header.innerHTML= await Header();
    //obtenemos el hash donde se encuentre o la seccion donde se esté moviendo
    let hash = getHash();
    
    //manejamos la ruta. usamos await ya que el resolve se puede demorar en obtener el hash y pasarlo a la funcion
    //hacer las validaciones necesarias y retornar el valor necesario
    let route = resolverRoute(hash);

    //render -> contiene el valor de las rutas especificado en el objeto route y las comparamos con la ruta
    //obtenida de la funcion resolveRoute() 
    //si routes[route] retorna un elemento retornamos dicho elemento, de lo contrario mostramos error4 404
    let render = routes[route] ? routes[route] : Error404;

    //pasamos el template a content
    content.innerHTML = await render();
};

export default router;