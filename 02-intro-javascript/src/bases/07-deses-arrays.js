//, Destructuracion de ARRAYS

const personajes = ['Goku', 'Vegeta', 'Trunks'];

personajes.forEach(element => {
    console.log(element);    
});

// puedo extraerlos destructureando arreglos
// Para extraer a Trunks, tengo que usar varias comas
// asi le digo que el primer elemento no lo necesito
const [ , vegeta , hijoVegeta] = personajes;

console.log(vegeta, hijoVegeta);



const useState = (valor) => {
    return [valor, ()=>{ console.log('Hola Mundo');}]
}

const arr = useState('Bulma');
console.log(arr);

//. para llamar a la funcion guardada en el arreglo, uso la notacion de corchetes
arr[1]();

//> Tarea
// 1. La primera posiicion de arr se llamara 'name'
// 2. La segunda se llamara 'setName'

const [name, setName] = useState('Bulma');