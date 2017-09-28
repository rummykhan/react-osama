import React, {Component} from 'react';

class NavigationBar extends Component{

    render(){
        return (
          <div>
              <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <a className="navbar-brand" href="#">Market Place</a>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <a className="nav-link" href="/stores">Stores</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/create-store">Create Store</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="/logout">Logout</a>
                          </li>
                      </ul>
                  </div>
              </nav>
          </div>
        );
    }

}

export default NavigationBar;