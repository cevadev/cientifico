//almacenamos la url de la api donde se encuentran los personajes de la serie
const API = 'https://rickandmortyapi.com/api/character/';
/**
 * getData() -> funcion que nos retorna los datos de los personajes para hacer render dentro de nuestra app
 * param id -> id de personaje que hayamos seleccionado
 * Logica de la funcion
 * ====================
 * Si la funcion no recibe un id entonces debe traer el llamado por defecto es decir, todo los personajes, por otro lado
 * si enviamos un id como  parametro a esta funcion generamos una nueva URL la cual va a llamar al personaje deseado
 */
const getData = async (id)=>{
    //si existe id entonces retornamos una nueva estructura del url
    const apiUrl = id ? `${API}${id}` : API;

    //hacemos el llamado al fetch del personaje o personajes.
    try
    {
        //response hace el llamado a fetch, con await hacemos que espere hasta que el llamado suceda
        const response = await fetch(apiUrl);
        //convertimos la estructura de response que es la respuesta del servidor a un objeto JSON para iterarlo
        const data  = await response.json();

        return data;
    }
    catch(error)
    {
        console.error(error);
    }
};

export default getData;