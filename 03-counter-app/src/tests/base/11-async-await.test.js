import { getImagen } from "../../base/11-async-await"

describe('Pruebas con async-await y Fetch', () => {
    
    test('Debe retornar el URL de la imagen', () => {
        
        // getImagen, retorna una PROMESA
        const url = getImagen();

        console.log(url);
    })
    
})
