import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions';

const initialState = {
    todos: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo => (
                    todo.id === action.payload.id ? action.payload : todo
                ))
            }
        default:
        return state
    }
}