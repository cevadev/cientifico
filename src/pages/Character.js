//Importamos getHash() para saber sobre que hash se está moviendo el id
//Importamos getData() para hacer fetch al llamado a nuestra api
import getHash from '../utils/getHash';
import getData from '../utils/getData';

//Esta vista consiste en informacion detallada del personaje que se selecciono haciendo click
const Character = async ()=>{
    //obtenemos el hash sobre el cual esta moviendose el usuario
    const id = getHash();
    const character = await getData(id);
    const view = `
        <div class="Character-inner">
            <article class="Character-card">
                <img src="${character.image}" alt="${character.name}">
                <h2>${character.name}</h2>
            </article>
            <article class="Character-card">
                <h3>Episodes: <span>${character.episode.length}</span> </h3>
                <h3>Status: <span>${character.status}</span></h3>
                <h3>Species: <span>${character.species}</span></h3>
                <h3>Gender: <span>${character.gender}</span></h3>
                <h3>Origin: <span>${character.origin.name}</span></h3>
                <h3>Last Location: <span>${character.location.name}</span></h3>
            </article>
        </div>
    `;
    return view;
};

export default Character;