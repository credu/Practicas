export const todoReducer = ( initialState = [], action ) => {
    switch ( action.type ) {
        case "create":
            return [...initialState, { ...action.payload, id: new Date().getTime(), done: false }]
        case "delete":
            return initialState.filter( todo => todo.id !== action.payload );
        case "toggle":
            return initialState.map( (item) => ( item.id == action.payload ) ? {...item, done: !item.done} : item );
        default:
            return initialState;
    }
}
