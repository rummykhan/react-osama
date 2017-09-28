import React from 'react';
import axios from 'axios';
import {actions, api} from '../constants/constants';
import {browserHistory} from 'react-router';

function setLoginPending(isLoginPending) {
    return {
        type: actions.LOGIN_PENDING,
        isLoginPending
    };
}

export function updateName(name) {
    return {
        type: actions.UPDATE_NAME,
        name
    };
}
function setLoginSuccess(isLoginSuccess) {
    if (isLoginSuccess == true)
        browserHistory.push("/stores");
    return {
        type: actions.LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function setLoginError(loginError) {
    return {
        type: actions.LOGIN_ERROR,
        loginError
    };
}

function fetchStoresPending(storesPending) {
    return {
        type: actions.STORES_PENDING,
        storesPending
    };
}

function fetchStoresSuccess(stores) {
    return {
        type: actions.STORES_SUCCESS,
        stores
    };
}

export function testingThingy(name) {

    return {
        type: actions.ACTION_THINGY,
        name
    };
}

function fetchStoresError(storesError) {
    if (storesError != null)
        browserHistory.push("/");
    return {
        type: actions.STORES_ERROR,
        storesError
    };
}

export function fetchStores() {
    return dispatch => {
        dispatch(fetchStoresPending(true));
        dispatch(fetchStoresSuccess(false));
        dispatch(fetchStoresError(null));
        var session = JSON.parse(localStorage.getItem('session'));
        axios.get(api.BASEURL + api.STORES_LISTING + "&q=users.id=" + session.user.id)
            .then(success => {
                dispatch(fetchStoresSuccess(success.data.data));
            })
            .catch((error) => {
                dispatch(fetchStoresPending(false));
                dispatch(fetchStoresError(error));
            });
    }
}

function saveUserSession(session) {
    localStorage.setItem('session', JSON.stringify(session.data));
    return {
        type: actions.SAVE_USER_SESSION,
        session
    };
}

export function login(email, password) {
    return dispatch => {
        dispatch(setLoginPending(true));
        dispatch(setLoginSuccess(false));
        dispatch(setLoginError(null));
        axios.post(api.BASEURL + api.LOGIN, {username: email, password: password})
            .then(success => {
                dispatch(setLoginPending(false));
                dispatch(saveUserSession(success));
                dispatch(setLoginSuccess(true));
            })
            .catch((error) => {
                dispatch(setLoginPending(false));
                dispatch(setLoginError(error.response.data.error.message));
            });
    }
}


function setCountriesPending(countriesPending) {
    return {
        type: actions.FETCH_COUNTRIES_PENDING,
        countriesPending
    };
}

function setCountriesSuccess(countriesSuccess) {
    countriesSuccess = countriesSuccess.map((row,i)=>{
        return { value: row.id, label: row.name }
    });
    return {
        type: actions.FETCH_COUNTRIES_SUCCESS,
        countriesSuccess
    };
}

function setCountriesError(countriesError) {
    return {
        type: actions.FETCH_COUNTRIES_ERROR,
        countriesError
    };
}

export function fetchCountries() {
    return dispatch => {
        axios.get( api.BASEURL + api.LOCATION )
            .then(success => {
                dispatch(setCountriesSuccess(success.data.data.data));
            })
            .catch((error) => {
                dispatch(setCountriesError(error.response.data.error.message));
            });
    }

}
export function fetchCities() {
    return dispatch => {
        axios.get( api.BASEURL + api.CITIES )
            .then(success => {
                dispatch(setCitiesSuccess(success.data.data.data));
            });
    }

}

function setCitiesSuccess(citiesSuccess) {
    citiesSuccess = citiesSuccess.map((row,i)=>{
        return { value: row.id, label: row.name, country_id: row.country_id }
    });
    return {
        type: actions.FETCH_CITIES,
        citiesSuccess
    };
}

function setStates(states) {
    states = states.map((row,i)=>{
        return { value: row.id, label: row.name,parent_id:row.parent_id }
    });
    return {
        type: actions.FETCH_STATES,
        states
    };
}
export function fetchStates() {
    return dispatch => {
        axios.get( api.BASEURL + api.STATES )
            .then(success => {
                dispatch(setStates(success.data.data.data));
            });
    }
}
export function createStore(storeData) {
    return dispatch => {
        axios.post( api.BASEURL + api.CREATE_STORE_API,storeData )
            .then(success => {
                console.log(success);
                dispatch(setStoreSuccess(success));
            }).catch(
                error=>{
                    dispatch(setStoreError(error));
                }
        );
    }
}
function setStoreSuccess(store = null) {
    if(store != null) {
        browserHistory.push('/stores');
    }
    return {
        type: actions.CREATE_STORE,
        store
    };
}
function setStoreError(storeError) {
    if(storeError && storeError.response){
        alert(storeError.response.data.error.message);
    }
    return {
        type: actions.CREATE_STORE_ERROR,
        storeError
    };
}
function setStoreDetailSuccess(storeDetail) {
    return {
        type: actions.STORE_DETAILS,
        storeDetail
    };
}
export function getStore(id) {
    return dispatch => {
        axios.get( api.BASEURL + api.GET_STORE+ id + '?with=profiles,profiles.countries' )
            .then(success => {
                console.log(success);
                dispatch(setStoreDetailSuccess(success.data.data));
            });

    }
}
