//Creamos una funcion que nos va a retornar la  vista que necesitamos.
const Home = ()=>{
    /**
     * Creacion del template base. Cuando se realice el render del llamado a la api podamos saber donde vamos a ponder
     * cada uno de los elementos.
     * div -> seccion de los personajes o parte principal
     * article -> lugar donde vivira cada personaje
     * anchor (a) -> etiqueta ancla que nos permite generar un enlace hacia el detalle del personaje
     */
    const view = `
        <div class="Characters">
            <article class="Character-item">
                <a href="#/1/">
                    <img src="image" alt="name" />
                    <h2>Name</h2>
                </a>
            </article>
        </div>
    `;
    return view;
}

//mediant export nos permite utilizar este archivo dentro de otros archivos JS
export default Home;