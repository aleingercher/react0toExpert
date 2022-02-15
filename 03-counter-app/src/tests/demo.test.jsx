describe("Pruebas para el DEMO.jsx", () => {

	// escribo test + TAB
	test("los strings deben ser iguales", () => {
		//.1 inicializacion
		const mensaje = "Hola Mundo";

		//.2 estimulo
		const mensaje2 = `Hola Mundo`;

		//.3 Observo el comportamiento
		expect(mensaje).toBe(mensaje2); // hace un mensaje === mensaje2
	});

    // aca meto varios tests, dentro de esta SUITE
});
