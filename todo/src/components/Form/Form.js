import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

class Form extends React.Component {
    state = {
        todo: ''
    }

    handleChange = e => {
        this.setState({
            todo: e.target.value
        });
    }

    submit = e => {
        e.preventDefault();
        this.props.addTodo({ value: this.state.todo, completed: false })
        this.setState({ todo: '' });
    }

    render() {
        return (
            <form
                onSubmit={this.submit}
            >
                <input
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.todo}
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

const mapStateToProps = null;

export default connect(mapStateToProps, { addTodo })(Form);