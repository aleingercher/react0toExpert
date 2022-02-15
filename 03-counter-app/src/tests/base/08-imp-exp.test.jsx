import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de Heroes", () => {
	test("Debe de retornar un heroe por id", () => {
		// primero me creo una variable id para probar cosas
		const id = 12;

		// creo la variable heroe que deberia devolver la funcion que testeo
		const heroe = getHeroeById(id);

		// trato de crear el finde nuevamente

		const heroeData = heroes.find((h) => h.id === id);

		expect(heroe).toEqual(heroeData);
	});

	test("Debe de retornar undefined si heroe no existe", () => {
		// primero me creo una variable id para probar cosas
		const id = 12;

		// creo la variable heroe que deberia devolver la funcion que testeo
		const heroe = getHeroeById(id);

		expect(heroe).toBe(undefined);
	});

	// debe retornar un arreglo con los heroes de DC
	// meto una constante owner
	// toEqual al arreglo filtrado

	test("debe retornar un arreglo con los heroes de DC", () => {
		const owner = "DC";

		const sameOwner = getHeroesByOwner(owner);

		const ownerData = heroes.filter((h) => h.owner == owner);

		expect(sameOwner).toEqual(ownerData);
	});


	// debe retornar un arreglo con los heroes de Marvel
	// usar funcion length
	test("debe retornar un arreglo con los heroes de Marvel", () => {
		const owner = "Marvel";

		const lengthMarvel = getHeroesByOwner(owner).length;

		expect( lengthMarvel ).toBe( 2 );
	});
});
