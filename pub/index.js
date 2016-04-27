define([
	'bootstrap/requirejs.config',
  'bootstrap/angularjs.loader'

], function(config, loader) {
  'use strict';

  require([
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
  ], function() {
    var requires = ['ngRoute', 'ngMaterial'];
    var application = angular.module('appication', requires);
    loader.configApplication(application);
    loader.registerModules(application, arguments);
    angular.bootstrap(document, [application.name]);
  });
});
