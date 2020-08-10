const resolverRoutes = (route)=>{
    /**
     * resolverRoutes necesita pasar un valor particular que es la ruta obtenida  por la funcion anterior.
     */
    //solo existen 999 personajes por lo que longitud del id debe ser menor o ogal 3
    if(route.length <= 3)
    {
        let validRoute = route === '/' ? route : '/:id'
        return validRoute;
    }
    //si no entra al if
    return `/${route}`; //retorna '/about'
};

export default resolverRoutes;