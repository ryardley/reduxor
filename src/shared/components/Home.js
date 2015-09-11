'use strict';

import React from 'react';
import DocumentTitle from 'react-document-title';

export default class Hello extends React.Component {
  render () {
    return (
      <DocumentTitle title='Home'>
        <div>Home</div>
      </DocumentTitle>
    );
  }
}
