import { ToDoList, ToDoAdd } from "./"
import { useToDo } from "../hooks";

export const TodoApp = () => {

    const { todos, toDosCount, pendingToDosCount, onNewToDo, onDeleteToDo, onToggleDoneStatus } = useToDo();

    return (
        <>
            <h1>TodoApp: ({ toDosCount}), <small>pendientes: ({ pendingToDosCount })</small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* ToDoList */}
                    <ToDoList todos={ todos } onDeleteToDo={ onDeleteToDo } onToggleDoneStatus={ onToggleDoneStatus } />
                </div>
                <div className="col-5">
                    <h4>Agregar to do</h4>
                    <hr />
                    {/* ToDoAdd onNewToDo( todo ) */}
                    <ToDoAdd onNewToDo={ onNewToDo } />
                </div>
            </div>

        </>
    )
}
