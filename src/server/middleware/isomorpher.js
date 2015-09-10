'use strict';

import React from 'react';
import Html from '../components/Html';

export default function isomorpher(req, res) {
  const componentFactory = React.createFactory(Html);
  const component = componentFactory({markup: 'Hello'});
  const staticMarkup = React.renderToStaticMarkup(component);
  res.send(staticMarkup);
}



