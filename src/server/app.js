import express from 'express';
import isomorpher from './middleware/isomorpher';
import nector from './middleware/nector';
import favicon from 'serve-favicon';
import path from 'path';

const app = express();

app.use(favicon(path.resolve(__dirname,'../../src/assets/favicon.ico')));
app.use(nector);
app.use(isomorpher);

export default app;
