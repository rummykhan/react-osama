import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login, testingThingy} from '../../actions/actions'
import {browserHistory} from 'react-router';
class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        console.log(this.props.location);
        if(this.props.location.pathname == '/logout'){
            localStorage.removeItem('session');
            browserHistory.push('/login');
        }
    }

    render(){
        return  (
        <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={this.onSubmit}>
            <input name="email" required type="email" placeholder="Email" value={this.state.email} onChange={this.onChange} />
            <input name="password" required type="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
            <button>login</button>
            { this.props.isLoginPending && <div>Please Wait...</div> }
            { this.props.isLoginSuccess && <div>Welcome Back!</div>}
            { this.props.loginError && <div>  {this.props.loginError } </div> }

          </form>
        </div>
      </div>
      );
    }
    onChange = (e) => {
        this.setState(
            {
                [e.target.name]:e.target.value
            }
        );
    }
    onSubmit = (e) =>{
        e.preventDefault();
        let {email,password} = this.state;
        this.props.login(email,password);
    }
}

const mapStateToProps = (state)=> {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError,
        name: state.name
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        login: (email,password) => dispatch(login(email,password)),
        dispatch: dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);