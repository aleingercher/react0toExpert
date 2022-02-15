//, TERNARIO

let activo = true;

/* 
> todo este codigo, equivale al ternario
let mensaje = '';

if(activo){
    mensaje = 'activo'
} else {
    mensaje = 'inactivo'
}
 */

const mensaje =  activo ? 'Activo' : 'Inactivo';

const operadorAND = activo  && 'Mostrar esto si esta activo'
console.log(operadorAND);
console.log(mensaje);