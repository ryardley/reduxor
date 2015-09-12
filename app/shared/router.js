'use strict';

import React, {Component} from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {Router, Route, IndexRoute} from 'react-router';
import App from '../shared/components/App';
import Hello from '../shared/components/Hello';
import Home from '../shared/components/Home';
import Followers from '../shared/components/Followers';

export default class RouterWrapper extends Component {
  render () {
    return (
      <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='hello' component={Hello} />
          <Route path='followers' component={Followers} />
        </Route>
      </Router>
    );
  }
}
