import { fireEvent, render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas para Giftitem', () => {
    const title = "saitama";
    const url = "https://www.google.com/";

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <GifItem title={ title } url= { url } /> );
        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con el url y el alt indicado', () => {
        render( <GifItem title={ title } url={ url } /> );
        const { src, alt } = screen.getByRole("img")
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('Debe de mostrar el titulo en un componente', () => {
        render( <GifItem title={ title } url={ url } /> );
        expect(screen.getByText(title)).toBeTruthy();
    })
})