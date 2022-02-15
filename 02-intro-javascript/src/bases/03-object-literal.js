const persona = {
	nombre: "Tony",
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New YOrk',
        zip: 41236465,
        lat: 14.4654,
        long: 34.987897
    }
};

// este es una REFERENCIA al objeto original. si lo modifico, lo modifico
const refePersona = persona;
refePersona.nombre = 'Carlos';

console.log('nombre refePersona: ' + refePersona.nombre);
console.log('nombre persona: ' + persona.nombre);

// para hacer una copia de un objeto
const copiaPersona = {...persona}

copiaPersona.nombre = "Azul";

console.log('nombre copiaPersona: ' + copiaPersona.nombre);
console.log('nombre persona: ' + persona.nombre);
// el PROTOTYPE es el adn de un objeto

console.table({
    persona,
    ale: {
        nombre: 'ale',
        apellido: 'ingercher',
        perro: 'Kiev',
    }
});
console.table(
    persona
);
