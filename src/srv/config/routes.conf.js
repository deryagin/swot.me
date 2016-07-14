var ping = require(swot.SERVER_DIR + 'service/ping');
var text = require(swot.SERVER_DIR + 'service/text');

module.exports.configure = configure;

function configure(app) {
  app.use('/', ping.router());
  app.use('/', text.router());
}
