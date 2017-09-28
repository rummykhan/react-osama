import React from 'react';
import {Route, IndexRoute} from 'react-router';
import LoginForm from './components/LoginForm/LoginForm';
import StoreListing from './components/Store/StoreListing';
import App from './components/App';

export default (
    <Route path="/" component = {App}>

        <IndexRoute component = {LoginForm} />
        <Route path="stores" component = {StoreListing} />
    
    </Route>
)