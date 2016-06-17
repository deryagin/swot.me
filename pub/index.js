define([
  'config/requirejs.config'

], function() {
  'use strict';

  require([
    'module/app/index',
    'module/register/index',
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
