'use strict';

import config from '../config';
import app from './app';

export default function server() {
  const c = config();

  const server = app.listen(c.port, function () {
    let {host, port} = server.address();
    host = host === '::' ? 'localhost' : host || 'localhost';
    console.log('%s listening at http://%s:%s', c.description, host, port);
  });
}
