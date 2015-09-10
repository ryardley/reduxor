import express from 'express';
import config from 'config';

export default function server () {
  const app = express();

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });

  const server = app.listen(config().port, function () {
    const name = config().description;
    let {host, port} = server.address();
    host = host === '::' ? 'localhost' : host || 'localhost';
    console.log('%s listening at http://%s:%s', name, host, port);
  });
}
