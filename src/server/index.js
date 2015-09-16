'use strict';

import config from '../config';
import express from 'express';
import isomorpher from './middleware/isomorpher';
import nector from './middleware/nector';
import favicon from 'serve-favicon';

export default function serve() {
  const app = express();
  const c = config();

  app.use(favicon(__dirname + '../../assets/favicon.ico'));
  app.use(nector);
  app.use(isomorpher);

  const server = app.listen(c.port, function () {
    let {host, port} = server.address();
    host = host === '::' ? 'localhost' : host || 'localhost';
    console.log('%s listening at http://%s:%s', c.description, host, port);
  });
}
