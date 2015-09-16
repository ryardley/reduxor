import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from 'app/components/App';
import Hello from 'app/components/Hello';
import Home from 'app/components/Home';
import Followers from 'app/components/Followers';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='hello' component={Hello} />
    <Route path='followers' component={Followers} />
  </Route>
);
