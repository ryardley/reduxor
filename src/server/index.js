'use strict';

import config from 'config';
import express from 'express';
import isomorpher from './middleware/isomorpher';

export default function serve () {
  const app = express();

  app.use(isomorpher);

  const server = app.listen(config().port, function () {
    let {host, port} = server.address();
    host = host === '::' ? 'localhost' : host || 'localhost';
    console.log('%s listening at http://%s:%s', config().description, host, port);
  });
}
