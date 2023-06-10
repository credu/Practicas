import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "Strider",
        email: "credulidad@gmail.com"
    });

    const { username, email  } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    useEffect( () => {
    },[])

    useEffect( () => {
    },[formState])

    useEffect( () => {
    },[email])

    return (
        <>
            <h1>SimpleForm</h1>
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
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange } />

            {
                username === "Strider2" && <Message />
            }
        </>
    )
}
