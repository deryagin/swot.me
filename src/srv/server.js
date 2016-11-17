var http = require('http');
var app = require('./application');

var server = http.createServer(app);
server.listen(3000, '0.0.0.0');

