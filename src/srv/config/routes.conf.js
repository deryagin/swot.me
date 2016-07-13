var ping = require(swot.SERVER_DIR + 'module/ping');

module.exports.configure = configure;

function configure(app) {
  app.use('/', ping.router());
}
