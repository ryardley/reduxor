'use strict';

import config from 'app/config';
import express from 'express';
import isomorpher from './middleware/isomorpher';

export default function serve () {
  const app = express();
  const c = config();

  app.use(isomorpher);

  const server = app.listen(c.port, function () {
    let {host, port} = server.address();
    host = host === '::' ? 'localhost' : host || 'localhost';
    console.log('%s listening at http://%s:%s', c.description, host, port);
  });
}
