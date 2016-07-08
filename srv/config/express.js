var favicon = require(swot.VENDORDIR + 'serve-favicon');

module.exports = function configureExpress(app) {
  app.use(favicon(swot.ROOTDIR + '/pub/resource/favicon.ico'));
};
