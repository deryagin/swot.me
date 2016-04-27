define([
	'bootstrap/requirejs.config',
  'bootstrap/angularjs.loader'

], function(config, loader) {
  'use strict';

  require([
    'module/words/index',
    'module/texts/index'
  ], function() {
    var requires = ['ngRoute', 'ngMaterial'];
    var application = angular.module('appication', requires);
    loader.configApplication(application);
    loader.registerModules(application, arguments);
    angular.bootstrap(document, [application.name]);
  });
});
