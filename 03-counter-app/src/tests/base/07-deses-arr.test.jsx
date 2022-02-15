import { retornaArreglo } from "../../base/07-deses-arr";

describe('Vamos a hacer pruebas de desestructuracion', ()=> {
    test('Debe retornar un string y un numero ', () => {

        const [ letras, numeros ] = retornaArreglo(); // esto retornaria ['ABC', 123]
        
        expect( typeof( letras ) ).toBe( 'string' );
        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );
        // expect(arr).toEqual( ['ABC', 123] )
    })
    
})