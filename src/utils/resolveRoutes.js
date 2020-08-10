/**
 * Recibe una ruta que obtenemos del usuario y determinamos a que template debemos enviar ya sea al Home o a las
 * seccion de rutas o si no lo encuentro lo enviamos al error 404
 * @param {*} route 
 */
const resolverRoutes = (route)=>{
    /**
     * resolverRoutes necesita pasar un valor particular que es la ruta obtenida  por la funcion anterior.
     * debemos validar si rote es igual a / si no lo es, entonces es igual a un id dado contrario
     * es una seccion por la que el usuario esta navegando
     */
    //solo existen 999 personajes por lo que longitud del id debe ser menor o ogal 3
    if(route.length <= 3)
    {
        //si route es igual a / es decir no hay hash, retorna el / de lo contrario el id
        let validRoute = route === '/' ? route : '/:id'
        return validRoute;
    }
    //si no entra al if
    return `/${route}`; //retorna '/about'
};

export default resolverRoutes;