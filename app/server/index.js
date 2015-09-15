'use strict';

import config from 'app/config';
import express from 'express';
import isomorpher from './middleware/isomorpher';
import services from './middleware/services';
import favicon from 'serve-favicon';

export default function serve () {
  const app = express();
  const c = config();

  app.use(favicon(__dirname + '../../assets/favicon.ico'));
  services(app);
  app.use(isomorpher);

  const server = app.listen(c.port, function () {
    let {host, port} = server.address();
    host = host === '::' ? 'localhost' : host || 'localhost';
    console.log('%s listening at http://%s:%s', c.description, host, port);
  });
}
