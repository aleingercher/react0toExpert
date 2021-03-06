import "@testing-library/jest-dom";

import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string", () => {
	test(" getSaludo debe retornar hola Fernando", () => {
		const nombre = "Fernando";

		const saludo = getSaludo(nombre);

		expect(saludo).toBe('Hola ' + nombre);
	});

    // getSaludo debe retornar Hola Carlos si no le paso argumento

    test('getSaludo debe retornar Hola Carlos si no le paso argumento', ()=> {
        const saludo  = getSaludo();

        expect(saludo).toBe('Hola Carlos');
    })
});
