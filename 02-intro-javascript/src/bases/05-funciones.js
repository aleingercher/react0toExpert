// FUNCIONES

//! MAL
function saludar( nombre) {
    return `Hola ${ nombre}`
}

// si hiciera
saludar = 30;
// reemplazaria el nombre de la funcion. MALISIMO. para eso mejor usar constantes

console.log(saludar);


// CONST
//* BIEN
const saludo = function(nombre) {
    return `Hola ${ nombre}`
}


//>  arrow function

const saludar2 = (nombre)=>{
    return `Hola ${ nombre}`
}

console.log(saludar2('Goku'));

// esta forma de escribir es igual a la siguiente, pero con RETURN
const getUser = ()=> {
    return {
        uid: 'ABC123',
        username: 'El_papi11234'
    }
}

// solo tengo que envolver lo que retorna entre parentesis
const getUser2 = ()=> ({
        uid: 'ABC123',
        username: 'El_papi11234'
})

//, TAREA
// 1. Funcion flecha
// 2. Retorna un objeto implicito

const getUsuarioActivo = ( nombre) => ({
    uid: '123123',
    username: nombre,
})

const userActivo = getUsuarioActivo('Alejandro');

console.log('userActivo ', userActivo);