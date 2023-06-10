import { ToDoItem } from "./"

export const ToDoList = ({ todos = [], onDeleteToDo, onToggleDoneStatus }) => {
    return (
        <ul className="list-group" >
            {
                todos.map(todo => (
                    // ToDoItem
                    <ToDoItem key={todo.id} todo={ todo } onDeleteToDo={onDeleteToDo} onToggleDoneStatus={ onToggleDoneStatus } />
                ))
            }
        </ul>
    )
}
