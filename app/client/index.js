'use strict';

import React from 'react';
import RouterWrapper from '../shared/router';

import store from '../shared/store';
import {Provider} from 'react-redux';

React.render(
  <Provider store={store}>
    {() => <Router history={createBrowserHistory()}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='hello' component={Hello} />
          <Route path='followers' component={Followers} />
        </Route>
      </Router>}
  </Provider>,
  document.getElementById('app')
);
