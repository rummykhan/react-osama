import React from 'react';
import Promise from 'es6-promise';
import axios from 'axios';
import {ACTIONS,API} from '../constants/constants';
import {Router, browserHistory} from 'react-router';
function setLoginPending(isLoginPending){
    return {
        type:ACTIONS.LOGIN_PENDING,
        isLoginPending
    };
}

function setLoginSuccess(isLoginSuccess){
    browserHistory.push("/stores");
    return {
        type: ACTIONS.LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError){
    return {
        type: ACTIONS.LOGIN_ERROR,
        loginError
    };
}
function fetchStoresPending(storesPending){
    return {
        type:ACTIONS.STORES_PENDING,
        storesPending
    };
}
function fetchStoresSuccess(stores){
    return {
        type:ACTIONS.STORES_SUCCESS,
        stores
    };
}
export function testingThingy(name){

    return {
        type:ACTIONS.ACTION_THINGY,
        name
    };
}
function fetchStoresError(storesError){
    if(storesError!=null)
        browserHistory.push("/");
    return {
        type:ACTIONS.STORES_ERROR,
        storesError
    };
}
export function fetchStores(){
    return dispatch =>{
        dispatch(fetchStoresPending(true));
        dispatch(fetchStoresSuccess(false));
        dispatch(fetchStoresError(null));
        var session = JSON.parse(localStorage.getItem('session'));
        axios.get(API.BASEURL+API.STORES_LISTING+"&q=users.id="+session.user.id)
        .then(success=>{
            dispatch(fetchStoresSuccess(success.data.data));
        })
        .catch((error)=>{
            dispatch(fetchStoresPending(false));
            dispatch(fetchStoresError(error));
        });
    }
}
function saveUserSession(session){
    localStorage.setItem('session',JSON.stringify(session.data));
    return {
        type:ACTIONS.SAVE_USER_SESSION,
        session
    };
}

export function login(email, password){
    return dispatch =>{
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));
        axios.post(API.BASEURL+API.LOGIN,{username:email,password:password})
        .then(success=>{
            dispatch(setLoginPending(false));
            dispatch(setLoginSuccess(true));
            dispatch(saveUserSession(success));
        })
        .catch((error)=>{
            dispatch(setLoginPending(false));
            dispatch(setLoginError(error.response.data.error.message));
        });
    }
}


