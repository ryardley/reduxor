'use strict';

import React from 'react';
import Router from 'react-router';
import routes from '../../shared/routes';
import alt from '../../alt';
import Html from '../components/Html';
import Iso from 'iso';
import config from 'config';
import DocumentTitle from 'react-document-title';

export default function isomorpher(req, res) {
  const iso = new Iso();
  Router.run(routes, req.url, function (Handler) {
    iso.add(
      React.renderToString(React.createElement(Handler)),
      alt.flush()
    );

    res.send(
      React.renderToStaticMarkup(
        React.createFactory(Html)({markup: iso.render(), title: DocumentTitle.rewind()})
      )
    );
  });
}



