'use strict';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';

// TODO: create a function to access
let state;
if(typeof window !== 'undefined'){
  state = window.__THIS_IS_MESSY_BUT_IT_WORKS || undefined;
  delete window.__THIS_IS_MESSY_BUT_IT_WORKS;
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default createStoreWithMiddleware(rootReducer, state);
