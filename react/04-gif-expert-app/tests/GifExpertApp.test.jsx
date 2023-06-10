import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GiftExpertApp', () => {

    test('Snapshot', () => {
        const { container } = render( <GifExpertApp /> );

        expect( container ).toMatchSnapshot();
    })
})