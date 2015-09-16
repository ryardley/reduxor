'use strict';
// import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {hydrate} from 'drator';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
const state = hydrate('App');

export default createStoreWithMiddleware(rootReducer, state);
