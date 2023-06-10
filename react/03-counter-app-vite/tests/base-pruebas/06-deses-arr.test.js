import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Use context debe devolver un objeto', () => {
    test('usContext debe devolver un objeto', () => {
        const clave = 5;
        const edad = 5;
        const nombre = "Jesus";

        const testContext = { clave, nombre, edad };

        const context = usContext( testContext );

        expect( context ).toStrictEqual({
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});