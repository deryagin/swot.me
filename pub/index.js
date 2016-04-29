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
    var requires = ['ngNewRouter', 'ngMaterial', 'texts', 'words'];
    var application = angular.module('appication', requires);
    application.config(ComponentMapping);
    application.controller('AppController', ['$router', AppController]);

    function AppController($router) {
      $router.config([
        {path: '/', redirectTo: '/texts'},
        {path: '/texts', component: 'texts'},
        {path: '/words', component: 'words'}
      ]);
    }

    function ComponentMapping($componentLoaderProvider) {
      $componentLoaderProvider.setTemplateMapping(function (name) {
        return './module/' + name + '/template.html';
      });
    }

    loader.configApplication(application);
    // loader.registerModules(application, arguments);
    angular.bootstrap(document, [application.name]);
  });
});
