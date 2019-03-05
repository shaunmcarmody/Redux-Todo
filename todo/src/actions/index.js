import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = todo => ({
    type: ADD_TODO,
    payload: {
        id: uuid(),
        value: todo,
        completed: false,
    }
})

export const deleteTodo = id => ({
    type: DELETE_TODO,
    payload: id
})

export const toggleCompleted = ({id, value, completed }) => ({
    type: TOGGLE_TODO,
    payload: {
        id,
        value,
        completed: !completed
    }
})