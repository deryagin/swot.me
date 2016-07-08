module.exports = function configureApp(app) {
  app.get('/ping', function (req, res) {
    console.log('pong');
    res.send('pong');
  });
};
