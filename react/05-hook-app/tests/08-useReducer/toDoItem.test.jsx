import { fireEvent, render, screen } from "@testing-library/react";
import { ToDoItem } from "../../src/08-useReducer/ToDoItem";

describe('Pruebas en ToDoItem', () => {
    const todo = {
        id: 1,
        description: "Piedra del alma",
        done: false
    }

    const onDeleteToDo = jest.fn();
    const onToggleToDo = jest.fn();

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el todo pendiente de completar', () => {
        render(
            <ToDoItem
                todo={ todo }
                onDeleteToDo={ onDeleteToDo }
                onToggleDoneStatus={ onToggleToDo }
            />
        )

        const liElement = screen.getByRole("listitem");
        expect( liElement.innerHTML ).toContain("Pendiente");
    })
    
    test('Debe de mostrar el todo completado', () => {
        todo.done = true;

        render(
            <ToDoItem
                todo={ todo }
                onDeleteToDo={ onDeleteToDo }
                onToggleDoneStatus={ onToggleToDo }
            />
        )

        const liElement = screen.getByRole("listitem");
        expect( liElement.innerHTML ).toContain("Terminado");
    })

    test('Debe de mostrar si se llamo el onToggleToDo', () => {
        render(
            <ToDoItem
                todo={ todo }
                onDeleteToDo={ onDeleteToDo }
                onToggleDoneStatus={ onToggleToDo }
            />
        )

        const button = screen.getByText("Terminado") || screen.getByText("Pendiente");
        fireEvent.click( button );
        expect( onToggleToDo ).toHaveBeenCalledWith( todo.id );
    })

    test('Debe de mostrar si se llamo el onDeleteToDo', () => {
        render(
            <ToDoItem
                todo={ todo }
                onDeleteToDo={ onDeleteToDo }
                onToggleDoneStatus={ onToggleToDo }
            />
        )

        const deleteButton = screen.getByText("Borrar");
        fireEvent.click( deleteButton );
        expect( onDeleteToDo ).toHaveBeenCalledWith( todo.id );
    })
})