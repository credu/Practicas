export const ToDoItem = ({ todo: {id, description, done}, onDeleteToDo, onToggleDoneStatus }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${ done ? "text-decoration-line-through" : "" }`}
            >
                {description}
            </span>

            <div>
                {
                    done ? (
                        <button
                            className="btn btn-success"
                            onClick={ () => onToggleDoneStatus(id) }
                        >
                            Terminado
                        </button>
                    ) : (
                        <button
                            className="btn btn-warning"
                            onClick={ () => onToggleDoneStatus(id) }
                        >
                            Pendiente
                        </button>
                    )
                }


                <button
                    className="btn btn-danger"
                    onClick={ () => onDeleteToDo(id) }
                >
                    Borrar
                </button>
            </div>
        </li>
    )
}
