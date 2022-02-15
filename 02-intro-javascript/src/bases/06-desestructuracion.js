//, DESTRUCTURING

//> de objetos

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    coordenadas: {
        sur: 50,
        norte: 55,
        oeste: 10,
        este: 30
    }
    // rango: 'genio'
}

console.log(`persona.nombre:`, persona.nombre)

// ahora destructuro

const { nombre } = persona;
// si quisiera cambiarle el nombre a APODO
console.log(`nombre`, nombre )

const { nombre: apodo} = persona;
console.log(`apodo`, apodo)

// puedo agregarle
const retornaPersona = (user) => {
    const {nombre, clave, edad} = user;
    console.log(nombre);
    console.log(clave);
    console.log(edad);
}

// si existe la propiedad RANGO en el objeto, la extrae. Sino, le paso 'capitan' como default
// const retornaPersonaYaDestructurado = ({nombre, clave, edad, rango = 'capitan'}) => {

//     console.log('nombre destructurado: ', nombre);
//     console.log('rango: ', rango);

//     return {
//         nombreClave: clave,
//         anios: edad,
//     }
// }

const useContext = ({nombre, clave, edad, rango = 'capitan'}) => {

    console.log('nombre destructurado: ', nombre);
    console.log('rango: ', rango);

    return {
        nombreClave: clave,
        anios: edad,
    }
}


retornaPersona(persona);
// const usandoElReturnDelMetodoDestrucurante = retornaPersonaYaDestructurado(persona);
const { nombreClave, anios} = useContext(persona);
console.log(anios, nombreClave);


//> Puedo destructurar objetos dentro de objetos
const { ale = nombre, coordenadas: {sur, norte}} = persona;
console.log(sur, norte);