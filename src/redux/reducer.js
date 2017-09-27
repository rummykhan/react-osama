import Promise from 'es6-promise';
const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
function setLoginPending(isLoginPending){
    return {
        type:LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess){
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError){
    return {
        type: LOGIN_ERROR,
        loginError
    };
}

export function login(email, password){
    return dispatch =>{
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));

        sendLoginRequest(email,password)

        .then(success=>{
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true));
        })
        .catch((error)=>{
            dispatch(setLoginPending(false));
            dispatch(setLoginError(error));
        });
    }
}

function sendLoginRequest(email,password){
    return new Promise((resolve,reject)=>{
        if(email =='osama@gmail.com' && password=='123'){
            return resolve(true);
        }

        
        
            reject(new Error("Invalid email or password"));
        
    });
}

const STATE = {
    isLoginPending:false,
    isLoginSuccess:false,
    loginError:null,
    name:'rummykhan was here!!',
};

export default function reducer(state=STATE,action){

    console.log(STATE);

    switch(action){
        case LOGIN_SUCCESS:
        return {
            ...state,
            isLoginSuccess:action.isLoginSuccess
        };

        case LOGIN_PENDING:
        return {
            ...state,
            isLoginPending:action.isLoginPending
        };

        case LOGIN_ERROR:

        return {
            ...state,
            loginError: action.loginError
        };

        default:
        return state;
    }
}