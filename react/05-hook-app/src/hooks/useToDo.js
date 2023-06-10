import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => JSON.parse(localStorage.getItem("item")) || [];

export const useToDo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem("item", JSON.stringify(todos));
    }, [todos])

    const onNewToDo = (newToDo) => {
        dispatch({ type: "create", payload: newToDo });
    }

    const onDeleteToDo = (idToDelete) => {
        dispatch({ type: "delete", payload: idToDelete });
    }

    const onToggleDoneStatus = (idToToggle) => {
        dispatch({ type: "toggle", payload: idToToggle });
    }

    return {
        todos,
        toDosCount: todos.length,
        pendingToDosCount: todos.filter(({ done }) => !done).length,
        onNewToDo,
        onDeleteToDo,
        onToggleDoneStatus
    };
}