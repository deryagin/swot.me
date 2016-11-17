global.swot = require('./globals');
var express = require('./config/express.conf');
var routes = require('./config/routes.conf');
var errors= require('./config/errors.conf');
var app = require('express')();
module.exports = app;

express.configure(app);
routes.configure(app);
errors.configure(app);
