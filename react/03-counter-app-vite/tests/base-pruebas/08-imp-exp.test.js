import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeByID debe de retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById( id );

        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });
    test('getHeroeByID debe de retornar un undefined si no existe un heroe por id', () => {
        const id = 100;
        const heroe = getHeroeById( id );

        expect( heroe ).toBeFalsy();
    });

    test('getHeroesByOwner debe devolver los heroes de DC', () => {
        const heroe = getHeroesByOwner("DC");
        console.log( heroe );

        expect( 3 ).toEqual( heroe.length );
    });

    test('getHeroesByOwner debe devolver los heroes de Marvel', () => {
        const heroe = getHeroesByOwner("Marvel");
        console.log( heroe );

        expect( 2 ).toEqual( heroe.length );
    });
});
