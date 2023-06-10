import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const { formState, onInputChange, onResetForm } = useForm({
        username: "",
        email: "",
        password: "",
    })

    const { username, email, password} = formState;

    useEffect( () => {
    },[])

    useEffect( () => {
    },[formState])

    useEffect( () => {
    },[email])

    return (
        <>
            <h1>Form With custom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={ username }
                onChange={ onInputChange } />

            <input
                type="email"
                className="form-control mt-5"
                placeholder="example@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange } />

            <input
                type="password"
                className="form-control mt-5"
                placeholder="password"
                name="password"
                value={ password }
                onChange={ onInputChange } 
            />

            <button onClick={ onResetForm } className="btn btn-primary">Borrar</button>
        </>
    )
}
