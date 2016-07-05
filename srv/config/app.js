module.exports = function configureApp(app) {
  app.get('/', function (req, res) {
    res.send('Hello World!');
  });
};
