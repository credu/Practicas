import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en el CounterAPp', () => {
    const number = 100

    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <CounterApp value={ number } /> );
        expect( container ).toMatchSnapshot();
    });
    test('Debe de mostrar el valor inicial de 100', () => {
        render( <CounterApp value={ number } /> );
        //expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain( number.toString() );
        expect( screen.getByText( number ) ).toBeTruthy();
    });

    test('Debe de incrementar con el boton +1', () => {
        render( <CounterApp value={ number } /> );
        fireEvent.click( screen.getByText("+1") );
        expect( screen.getByText( number + 1) );
    });

    test('Debe de incrementar con el boton -1', () => {
        render( <CounterApp value={ number } /> );
        fireEvent.click( screen.getByText("-1") );
        expect( screen.getByText( number - 1) );
    });

    test('Debe de funcionar con el boton de reset', () => {
        render( <CounterApp value={ number } /> );
        fireEvent.click( screen.getByText("-1") );
        fireEvent.click( screen.getByText("-1") );
        fireEvent.click( screen.getByText("-1") );
        //fireEvent.click( screen.getByText("Reset") );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }));
        expect( screen.getByText( number ) ).toBeTruthy();

    });
});