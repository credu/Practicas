import { useState } from "react"
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("")
  
    const onInputChange = (event) => {
        setInputValue( event.target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length < 1) return;

        // setCategorias( categorias => [inputValue, ...categorias] )
        onNewCategory( inputValue.trim() );
        setInputValue("")
    }

    return (
        <form onSubmit={ onSubmit } autoComplete="off" aria-label="form">
            <input type="text" placeholder="Buscar gifs" value={ inputValue } onChange={ onInputChange } />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}