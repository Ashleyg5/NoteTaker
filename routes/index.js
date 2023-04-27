const express = require('express');

const noteshtmlRouter = require('./html');
const notesapiRouter = require('./api');

const app = express();

app.use('/notes', noteshtmlRouter);
app.use('/notes', notesapiRouter);

module.exports = app;