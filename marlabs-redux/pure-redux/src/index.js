import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import userReducer from './reducers/users';

const store = createStore(userReducer);

ReactDOM.render(
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
