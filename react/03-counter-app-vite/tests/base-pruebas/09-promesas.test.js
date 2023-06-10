import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe obtener un error si heroe no existe', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect(hero).toBeTruthy();
                console.log("Encontre un heroe todo bien")
                done();
            })
            .catch( error => {
                console.log("Se recibio un error")
                expect( error ).toBe("No se pudo encontrar el héroe")
                done()
            });
    });
})