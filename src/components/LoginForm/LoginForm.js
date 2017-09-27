import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from '../../redux/reducer'

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        let {email,password} = this.state;
        let {isLoginPending,isLoginSuccess,loginError} = this.props;
        return  (
        <div className="login-page" onSubmit={this.onSubmit}>
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username" onChange={e=>this.setState({email:e.target.value})} />
            <input type="password" placeholder="password" onChange={e=>this.setState({password:e.target.value})} />
            <button>login</button>
            {isLoginPending && <div>Please Wait...</div>}
            {isLoginSuccess && <div>Welcome Back!</div>}
            {loginError && <div>{loginError.message}</div>}

          </form>
        </div>
      </div>
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
        loginError: state.loginError
    };
};

const mapDispatchToProps = (dispatch)=>{
    return {
        login: (email,password)=> dispatch(login(email,password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);