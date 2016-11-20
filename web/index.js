define([
  'config/requirejs.conf'

], function() {
  'use strict';

  require([
    'angular',
    'angular-animate',
    'angular-aria',
    'angular-messages',
    'angular-ui-router',
    'angular-material'
  ], function () {
    require([
      'module/app/index',
      'module/register/index',
      'module/login/index',
      'module/sidenav/index',
      'module/start/index',
      'module/text/index',
      'module/words/index',
      'module/stats/index',
      'module/import/index',
      'module/export/index',
      'module/settings/index',
      'module/news/index',
      'module/ideas/index',
      'module/help/index',
      'module/about/index'
    ], function(app) {
      var modules = Array.prototype.slice.call(arguments, 1);
      modules.forEach(function (module) { app.requires.push(module.name); });
      angular.bootstrap(document, [app.name]);
    });
  });
});
