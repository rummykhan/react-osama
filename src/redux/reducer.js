import { ACTIONS } from '../constants/constants';
import initialState from '../state';



const coreReducer = (state = initialState, action) => {
    state = checkAction(state, action);
    return state;
}

const checkAction = (state, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };

        case ACTIONS.LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };

        case ACTIONS.LOGIN_ERROR:

            return {
                ...state,
                loginError: action.loginError
            };

        case ACTIONS.SAVE_USER_SESSION:
            return {
                ...state,
                session: action.session
            };

        case ACTIONS.STORES_PENDING:
            return {
                ...state,
                storesPending: action.storesPending
            };

        case ACTIONS.STORES_SUCCESS:
            return {
                ...state,
                stores: action.stores
            };

        case ACTIONS.STORES_ERROR:
            return {
                ...state,
                storesError: action.storesError
            };
        case ACTIONS.ACTION_THINGY:
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
}

export default coreReducer;