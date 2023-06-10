import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImagen debe retornar la url de una imagen aleatoria', async () => {
        const resp = await getImagen();
        //console.log(url)
        expect( resp ).toBe("No se encontro la imagen");
    });
});