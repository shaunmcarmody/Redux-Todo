import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => (
    <ul>
        {
            props.todos.map((todo, i) => <li key={i}>{todo.value}</li>)
        }
    </ul>
)

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { })(TodoList);