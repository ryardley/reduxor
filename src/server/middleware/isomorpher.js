'use strict';

import React from 'react';
import Router from 'react-router';
import routes from '../../shared/routes';
import alt from '../../alt';
import Html from '../components/Html';
import Iso from 'iso';

export default function isomorpher(req, res) {

  const iso = new Iso();

  Router.run(routes, req.url, function (Handler) {

    const content = React.renderToString(React.createElement(Handler));
    iso.add(content, alt.flush());
    const component = React.createFactory(Html)({markup: iso.render(), title: 'Foo'});
    const staticMarkup = React.renderToStaticMarkup(component);
    res.send(staticMarkup);
  });

}



