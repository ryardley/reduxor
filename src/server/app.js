import express from 'express';
import isomorpher from './middleware/isomorpher';
import nector from './middleware/nector';
import favicon from 'serve-favicon';

const app = express();

app.use(favicon(__dirname + '../../assets/favicon.ico'));
app.use(nector);
app.use(isomorpher);

export default app;
