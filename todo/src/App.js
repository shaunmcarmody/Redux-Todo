import React, { Component } from 'react';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <TodoList />
      </div>
    );
  }
}

export default App;
