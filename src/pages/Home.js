//importamos la funcion fetchData() que retorna los personajes de la serie de una api
import getData from '../utils/getData';

//Creamos una funcion que nos va a retornar la  vista que necesitamos.
//como  dentro de Home vamos a llamar a una api asincronica, debemos convertir la funcion Home en async y await
const Home = async ()=>{
    
    //Llamado a nuestra funcion getData(), await, es decir que espere hasta que getData retorne algo
    const characters = await getData(); //luego debemos editar el template para iterar los personajes
    /**
     * Creacion del template base. Cuando se realice el render del llamado a la api podamos saber donde vamos a ponder
     * cada uno de los elementos.
     * div -> seccion de los personajes o parte principal
     * article -> lugar donde vivira cada personaje
     * anchor (a) -> etiqueta ancla que nos permite generar un enlace hacia el detalle del personaje
     * characters.results.map() -> Todos los personajes devueltos estan dentro de results. Al ser unobjeto iterable
     * con map() nos permite retornar un nuevo arreglo con la estructura que le este pasando que será el template
     * asi dentro del template podremos acceder a las variables de cada personaje
     * 
     * map nos genera un arreglo pero los elemento del arreglo debemos unirlos por eso utilizamos .join('') por defecto
     * intenta separarlo con , lo cual no queremos por eso colocamos '' que indica que lo separe con nada
     */
    const view = `
        <div class="Characters">

            ${characters.results.map(character =>`
                <article class="Character-item">
                <a href="#/${character.id}/">
                    <img src="${character.image}" alt="${character.name}" />
                    <h2>${character.name}</h2>
                </a>
            </article>
            `).join('')}
        </div>
    `;
    return view;
}

//mediant export nos permite utilizar este archivo dentro de otros archivos JS
export default Home;