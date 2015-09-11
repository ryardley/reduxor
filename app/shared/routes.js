'use strict';

import React from 'react';
import App from './components/App';
import Hello from './components/Hello';
import Home from './components/Home';
import Followers from './components/Followers';
import {Route, DefaultRoute} from 'react-router';

export default (
  <Route name='home' path='/' handler={App}>
    <DefaultRoute handler={Home} />
    <Route name='hello' path='/hello' handler={Hello} />
    <Route name='followers' path='/followers' handler={Followers} />
  </Route>
);
