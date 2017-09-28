import React, {Component} from 'react';
import NavigationBar from '../components/common/NavigationBar';
import {browserHistory} from 'react-router';

class App extends Component {
    constructor(props) {
        super(props);
        if (localStorage.getItem('session')) {
            console.log("SESSION IS ON BABY!");
            //browserHistory.push("stores");
        }
    }
    render() {
        return (
            <div>
                {localStorage.getItem('session') && <NavigationBar/> }
                <div>{this.props.children}</div>
            </div>
        );

    }

}

export default (App);