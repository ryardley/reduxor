'use strict';

import React from 'react';
import App from './components/App';
import Hello from './components/Hello';
import {Route} from 'react-router';

export default (
  <Route name='home' path='/' handler={App}>
    <Route name='hello' path='/hello' handler={Hello} />
  </Route>
);


