import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './store';
import LoginForm from './components/LoginForm/LoginForm';
ReactDOM.render(
<Provider
store = {store}
>
<LoginForm></LoginForm>
    </Provider>, 
document.getElementById('root')
);
registerServiceWorker();
