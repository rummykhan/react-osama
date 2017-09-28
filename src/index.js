import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import bootAxios from './bootstrap';
import {Provider} from 'react-redux';
import store from './store';
import LoginForm from './components/LoginForm/LoginForm';
import App from './components/App';

bootAxios();

ReactDOM.render(
<Provider store={store}>
    <App> </App>
</Provider>, 
document.getElementById('root')
);

registerServiceWorker();
