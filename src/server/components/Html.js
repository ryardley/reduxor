'use strict';

import React from 'react';

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
          <script src='http://localhost:8080/client.js'></script>
        </body>
      </html>
    );
  }
}

