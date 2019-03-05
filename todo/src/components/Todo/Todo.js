import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleCompleted } from '../../actions/';

const Todo = props => (
    <div>
        <p
           className={props.todo.completed ? 'completed' : 'todo'}
           onClick={() => props.toggleCompleted(props.todo)} 
        >
            {props.todo.value}
        </p>
        <button
            onClick={() => props.deleteTodo(props.todo.id)}
        >
            Delete
        </button>
    </div>
)

export default connect(null, {deleteTodo, toggleCompleted})(Todo)