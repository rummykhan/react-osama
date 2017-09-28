import React from 'react';
import {Route, IndexRoute} from 'react-router';
import LoginForm from './components/LoginForm/LoginForm';
import StoreListing from './components/Store/StoreListing';
import CreateStore from './components/Store/CreateStore';
import App from './components/App';
import StoreDetails from "./components/Store/StoreDetails";

export default (
    <Route path="/" component = {App}>
        <IndexRoute component = {LoginForm} />
        <Route path="login" component = {LoginForm} />
        <Route path="logout" component = {LoginForm} />
        <Route path="stores" component = {StoreListing} />
        <Route path="create-store" component = {CreateStore} />
        <Route path="store-details/:number" component = {StoreDetails} />
    </Route>
)