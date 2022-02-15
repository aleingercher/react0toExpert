//, imports y funciones

// importo heroes por defecto, y owners cdestructurando
// import heroes, {owners, arrayDummie}  from "../data/heroes";
import heroes from "../data/heroes";
// al importar de un archivo que tiene solo un export default, lo importo asi y le pongo el nombre que quiera
// import datos from '../data/heroes export default'


// import { heroes } from './data/heroes';
//> usar snippet 'imp'
// import {heroes} from './data/heroes'
//> escribir el nombre de la funcion a importar para que autogenere el import
// heroes

// el find es para encontrar un solo elemento
const getHeroeById = (id)=> {
    return heroes.find(heroe=>heroe.id === id)
}

//el filter para devolver un array
const getHeroeByOwner = ( owner )=> {
    return heroes.filter(heroe=>heroe.owner === owner)
}

export {
    getHeroeById,
    getHeroeByOwner
}
// console.log(getHeroeById(heroes,2));
// console.table(getHeroeByOwner(heroes,'DC'));
// console.table(heroes);
