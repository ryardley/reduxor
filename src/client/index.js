'use strict';

import React from 'react';
import RouterWrapper from 'app/router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import store from 'app/store';
import {Provider} from 'react-redux';

React.render(
  <Provider store={store}>
    {() => <RouterWrapper history={createBrowserHistory()}/>}
  </Provider>,
  document.getElementById('app')
);
