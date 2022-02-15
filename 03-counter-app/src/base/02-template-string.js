


const nombre   = 'Fernando';
const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


// vamos a chequear esta funcion en el test. para eso hay que EXPORTAR
export function getSaludo(nombre = 'Carlos') {
    return 'Hola ' + nombre;
}

// console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );