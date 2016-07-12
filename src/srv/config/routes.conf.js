var ping = require(swot.SERVER_DIR + 'module/ping');

module.exports = function configureApp(app) {
  app.use('/', ping.router);
};
