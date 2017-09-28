import {actions} from '../constants/constants';
import initialState from '../state';

const coreReducer = (state = initialState, action) => {
    state = checkAction(state, action);
    return state;
}

const checkAction = (state, action) => {
    switch (action.type) {
        case actions.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };

        case actions.LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };

        case actions.LOGIN_ERROR:

            return {
                ...state,
                loginError: action.loginError
            };

        case actions.SAVE_USER_SESSION:
            return {
                ...state,
                session: action.session
            };

        case actions.STORES_PENDING:
            return {
                ...state,
                storesPending: action.storesPending
            };

        case actions.STORES_SUCCESS:
            return {
                ...state,
                stores: action.stores
            };

        case actions.STORES_ERROR:
            return {
                ...state,
                storesError: action.storesError
            };
        case actions.ACTION_THINGY:
            return {
                ...state,
                name: action.name
            };

        case actions.FETCH_COUNTRIES_PENDING:
            return {
                ...state,
                countriesPending: action.countriesPending
            };

        case actions.FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                countriesSuccess: action.countriesSuccess
            };

        case actions.FETCH_COUNTRIES_ERROR:

            return {
                ...state,
                countriesError: action.countriesError
            };

        case actions.FETCH_CITIES:
            return {
                ...state,
                citiesSuccess: action.citiesSuccess
            };
        case actions.FETCH_STATES:
            return {
                ...state,
                states: action.states
            };
        case actions.UPDATE_NAME:
            return {
                ...state,
                name: action.name
            };
        case actions.STORE_DETAILS:
            return {
                ...state,
                storeDetail: action.storeDetail
            };
        default:
            return state;
    }
}

export default coreReducer;