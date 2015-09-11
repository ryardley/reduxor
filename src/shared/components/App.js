'use strict';

import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>App Header</h1>
        <ul>
          <li><Link to='home'>Home</Link></li>
          <li><Link to='hello'>Hello</Link></li>
        </ul>
        <RouteHandler {...this.props} />
      </div>
    );
  }
}
