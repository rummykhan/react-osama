import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import bootAxios from './bootstrap';
import {Provider} from 'react-redux';
import store from './store';
import {browserHistory,Router} from 'react-router';
import routes from './routes';

bootAxios();

ReactDOM.render(
<Provider store={store}>
    <Router history={browserHistory} routes={routes} ></Router>
</Provider>, 
document.getElementById('root')
);

registerServiceWorker();
