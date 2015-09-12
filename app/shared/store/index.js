'use strict';
import thunk from 'redux-thunk';import {createStore, applyMiddleware} from 'redux';

import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default createStoreWithMiddleware(rootReducer);
