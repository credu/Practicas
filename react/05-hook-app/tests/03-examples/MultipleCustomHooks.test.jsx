import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/03-examples"
import { mockComponent } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useCounter")
jest.mock("../../src/hooks/useFetch")

describe('Pruebas en MultipleCustomHooks', () => {
    const increment = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: increment
    })

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText("Loading...") );
        expect( screen.getByText("BreakingBad Quotes") );

        const nextButton = screen.getByRole("button", { name: "Next Quote" });
        expect(nextButton.disabled).toBeTruthy();
    });

    test('Debe de mostrar un Quote', () => {
        useFetch.mockReturnValue({
            data: { id: 1, sprites: { front_default: "https://images.wikidexcdn.net/mwuploads/wikidex/7/77/latest/20150621181250/Pikachu.png" }, name: "Pikachu" },
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole("button", { name: "Next Quote" });
        expect(nextButton.disabled).toBeFalsy();
    })

    test('Debe de llamar la funcion de imcrementar', () => {

        useFetch.mockReturnValue({
            data: { id: 1, sprites: { front_default: "https://images.wikidexcdn.net/mwuploads/wikidex/7/77/latest/20150621181250/Pikachu.png" }, name: "Pikachu" },
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole("button", { name: "Next Quote" });
        fireEvent.click( nextButton );

        expect( increment ).toHaveBeenCalled();
    })
})