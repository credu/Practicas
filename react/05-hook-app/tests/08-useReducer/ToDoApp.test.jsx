import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useToDo } from "../../src/hooks/useToDo";

jest.mock("../../src/hooks/useToDo");

useToDo.mockReturnValue({
    todos: [
        { id: 1, description: 'Todo #1', done: false },
        { id: 2, description: 'Todo #2', done: true },
    ], 
    todosCount: 2, 
    pendingTodosCount: 1, 
    handleDeleteTodo: jest.fn(), 
    handleToggleTodo: jest.fn(), 
    handleNewTodo: jest.fn()
})

describe('Pruebas en <ToDoApp />', () => {
    test('Debe renderizarse sin problemas', () => {
        render( <TodoApp /> );

        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
    })
})