import React from 'react';

export default class Html extends React.Component {
  static propTypes = {
    markup: React.PropTypes.string
  }

  render () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <div
            id='app'
            dangerouslySetInnerHTML={{__html: this.props.markup}}>
          </div>
        </body>
      </html>
    );
  }
}

