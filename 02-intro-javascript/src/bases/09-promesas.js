//, PROMESAS
/* En al vida real, las promesas se hacen cuando alguien te pide algo, y le decis que espere a que lo hagas */

import { getHeroeById } from "./08-imports";

// es asincrona por defecto. Cuando termina lo SINCRONICO ejecuta la promesa
// para luego resolver la promesa con un then, debo llamar al resolve dentro de la promesa

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout(() => {
        
//         const heroe = getHeroeById(8);
//         try {
//             resolve(heroe);        
//         } catch (error) {
//             reject('no encontramos el heroe');
//         }
//     }, 2000);

// });

// promesa.then((heroe)=>console.log(heroe))
// .catch(err => console.warn(err))

const getHeroByIdAsync = (id)=> {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            
            const heroe = getHeroeById(id);

            if (heroe) {
                resolve(heroe); 
            } else {
                reject('no encontramos el heroe');
            }
        }, 2000);
    
    });
}

getHeroByIdAsync(6)
    .then(console.table)
    .catch(console.warn);

fetch('https://pokeapi.co/api/v2/pokemon/vulpix').then(res => res.json()).then(console.log);
