'use strict';

import React from 'react';
import config from 'config';
export default class Html extends React.Component {
  static propTypes = {
    markup: React.PropTypes.string,
    title: React.PropTypes.string
  }

  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div id='app' dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
          <script src={config().assetHost + '/client.js'}></script>
        </body>
      </html>
    );
  }
}

