'use strict';

import React, {Component} from 'react';
import routes from './routes';
import {Router} from 'react-router';

export default class RouterWrapper extends Component {
  render () {
    return (
      <Router {...this.props}>
        {routes}
      </Router>
    );
  }
}
