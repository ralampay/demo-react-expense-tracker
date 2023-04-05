import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './js/App';
import {
    HashRouter as Router
} from 'react-router-dom';
import {
    isLoggedIn
} from  './js/services/UsersService';
import LoginForm  from './js/LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (isLoggedIn()) {
    root.render(
        <Router>
            <App />
        </Router>
    )
} else {
    root.render(<LoginForm/>)
}