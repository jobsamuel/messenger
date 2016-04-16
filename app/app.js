'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/router');
const app = express();

// Port configuration.
app.set('port', process.env.PORT || 3002);

// Allow application to obtain client IP.
app.set('trust proxy', true);

// Apply 'Pretty' format to JSON responses.
app.set('json spaces', 2);

// body-parser middleware configuration.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Application endpoints.
app.use('/', router);

module.exports = app;
