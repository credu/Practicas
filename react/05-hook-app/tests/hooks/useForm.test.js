import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en useForm', () => {
    const initialForm = { name: "Jesus" }
    test('Debe de regresar el objeto por defecto', () => {
        const { result } = renderHook( () => useForm(initialForm) );

        const { formState } = result.current;

        expect(result.current).toEqual({
            ...formState,
            formState,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function ),
        })
        expect(formState).toEqual(initialForm)
    })

    test('Debe de cambiar el nombre del formulario', () => {
        const newValue = "Juan";

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange({
                target: {
                    name: "name", value: newValue 
                }
            });
        });

        expect(result.current.name).toBe( newValue );
        expect(result.current.formState.name).toBe( newValue );
    })

    test('Debe de cambiar el nombre del formulario', () => {
        const newValue = "Juan";

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange({ target: { name: "name", value: newValue }});
            onResetForm();
        });

        expect(result.current.name).toBe("Jesus");
        expect(result.current.formState.name).toBe("Jesus");
    })
})