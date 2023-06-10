import { useForm } from "../hooks/";

export const ToDoAdd = ({ onNewToDo }) => {
  const { formState, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onChangeTodo = (event) => {
    onInputChange( event );
  }

  const handleForm = (event) => {
    event.preventDefault();
    onNewToDo( formState )
    //onResetForm();
  }

  return (
    <form onSubmit={ handleForm }>
      <input type="text"
        placeholder="Que hay que hacer"
        className="form-control"
        name="description"
        value={ formState.description }
        onChange={ onChangeTodo }
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}
