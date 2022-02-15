import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con promesas", () => {
	// paso como parametro el done, para luego mostrarle donde termina el test asincrono
	test("getHeroeByIdAsync debe retornar un heroe  async", (done) => {
		const id = 1;

		// retorna una promesa que si encuentra el id, al segundo y medio devuelve el heroe respectivo
		// si lo hago sin el done(), no va a esperar la respuesta y me va a pasar por alto

		getHeroeByIdAsync(id).then((heroe) => {
			expect(heroe).toBe(heroes[0]);
			done();
		});
	});

	test("debe obtener un error si el heroe por id no existe", (done) => {
		const id = 10; // id que no existe

		getHeroeByIdAsync(id).catch((error) => {
			// la idea es que capture el mismo error que el reject
			expect(error).toBe("No se pudo encontrar el héroe!!!!!!!");
			done();
		});
	});
});
