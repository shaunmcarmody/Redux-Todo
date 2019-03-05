import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todo from './reducers';
import { loadState, saveState } from './models/localStorage.js';
import './index.css';
import App from './App';

const persistedState = loadState();
const store = createStore(
    todo,
    persistedState
);

store.subscribe(() => {
    saveState({
        todos: store.getState().todos
    });
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));
