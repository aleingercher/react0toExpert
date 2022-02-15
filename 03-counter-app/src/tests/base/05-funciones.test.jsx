import "@testing-library/jest-dom";

import { getUser, getUserActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
	test("should return an object", () => {
		const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
		};

		const user = getUser();

		expect(user).toEqual(userTest);
	});

    test('probando getUserActivo', ()=> {

        const nombre = 'Fernando';

        const userActivoTest = (nombre) => {
            return {
                uid: 'ABC567',
                username: nombre
            }
        }

        const user = getUserActivo( nombre );

        expect( user ).toEqual( userActivoTest( nombre ));
    })
});
