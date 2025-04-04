import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en GifGrid', () => {
    const category = "One Punch";

    test('Debe de mostrar el loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid categoria={ category } /> );
        expect( screen.getByText("Cargando...") );
        expect( screen.getByText( category ) );
    })

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {
        const gifs = [
            {
                id: "ABC",
                title: "Saitama",
                url: "https://localhost/saitama.jpg"
            }
        ];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render( <GifGrid categoria={ category } /> );
        expect( screen.getAllByRole("img").length ).toBe(1);

    })
})