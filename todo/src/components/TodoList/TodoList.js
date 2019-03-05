import React from 'react';
import Todo from '../Todo/Todo'
import { connect } from 'react-redux';

const TodoList = props => (
    <div>
        {
            props.todos.map(todo => <Todo key={todo.id} todo={todo} />)
        }
    </div>
)

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);