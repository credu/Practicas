import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        description: "Demo Todo",
        done: false
    }]

    test('Debe de regresar el estado inicial', () => {
        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState );
    })

    test('Debe agregar un to Do', () => {
        const action = {
            type: "create",
            payload: {
                description: "Nuevo todo 2",
                done: false
            }
        }

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        //expect( newState ).toContain( action.payload );
    })

    test('Debe de eliminar un to do', () => {
        const action = {
            type: "delete",
            payload: 1
        }

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
    })

    test('Debe cambiar el done de un to do', () => {
        const action = {
            type: "toggle",
            payload: 1
        }

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBeTruthy();
    })
})