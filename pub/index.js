define([
  'bootstrap/requirejs.config',
  'bootstrap/module.registrator'

], function(config, registrator) {
  'use strict';

  require([
    'module/app/index',
    'module/sidenav/index',
    'module/texts/index',
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
    registrator.addRequires(app, arguments);
    angular.bootstrap(document, [app.name]);
  });
});
