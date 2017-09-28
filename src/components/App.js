import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from '../routes';
class App extends Component{
    constructor(props){
        super(props);
        if(localStorage.getItem('session')){
            console.log("SESSION IS ON BABY!");
           browserHistory.push("stores");
        }
    }
    render(){
        return (
            
            <Router history={browserHistory} routes={routes} ></Router>
        );
    }

}
export default (App);