'use strict';

import React from 'react';
import Html from '../components/Html';
import DocumentTitle from 'react-document-title';

export default function isomorpher(req, res) {
  res.send(
    React.renderToStaticMarkup(
      React.createFactory(Html)({title: DocumentTitle.rewind()})
    )
  );
}



