'use strict';

//module
const express = require('express');
const app = express();

//routing
const home = require('./routes/home');

//app setting
app.set('views', './views');
app.set('view engine', 'ejs');

//middle
app.use('/', home);

module.exports = app;
