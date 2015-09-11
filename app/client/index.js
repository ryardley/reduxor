'use strict';

import React from 'react';
import Router from 'react-router';
import routes from '../shared/routes';
import Iso from 'iso';
import alt from '../alt';

Iso.bootstrap(function (state, _, container) {
  alt.bootstrap(state);

  Router.run(routes, Router.HistoryLocation, function (Handler) {
    const node = React.createElement(Handler);
    React.render(node, container);
  });
});
