import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import coreReducer from './redux/reducer';
import initialState from './state';

const store = createStore(coreReducer, initialState, applyMiddleware(thunk));

export default store;