'use strict';

//module
const express = require('express');
const app = express();

//routing
const home = require('./src/routes/home');

//app setting
app.set('views', './src/views');
app.set('view engine', 'ejs');

//middle
app.use('/', home);

module.exports = app;
