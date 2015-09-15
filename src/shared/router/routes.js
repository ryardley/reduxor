import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../../shared/components/App';
import Hello from '../../shared/components/Hello';
import Home from '../../shared/components/Home';
import Followers from '../../shared/components/Followers';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='hello' component={Hello} />
    <Route path='followers' component={Followers} />
  </Route>
);
