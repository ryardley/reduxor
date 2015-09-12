'use strict';

import React from 'react';
import {Link} from 'react-router';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>App Header</h1>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/hello'>Hello</Link></li>
          <li><Link to='/followers'>Followers</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
