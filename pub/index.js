define([
	'bootstrap/requirejs.config',
  'bootstrap/angularjs.loader'

], function(config, loader) {
  'use strict';

  require([
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
  ], function() {
    var requires = ['ngNewRouter', 'ngMaterial'];
    var application = angular.module('swot.app', requires);
    loader.configApplication(application);
    loader.registerModules(application, arguments);

    application.config(ComponentMapping);
    application.controller('AppController', ['$router', AppController]);

    function AppController($router) {
      $router.config([
        {path: '/', redirectTo: '/texts'},
        {path: '/texts', component: {sidenav: 'sidenav', content: 'texts'}},
        {path: '/words', component: {sidenav: 'sidenav', content: 'words'}}
      ]);
    }

    function ComponentMapping($componentLoaderProvider) {
      $componentLoaderProvider.setTemplateMapping(function (name) {
        return './module/' + name + '/template.html';
      });
    }

    angular.bootstrap(document, [application.name]);
  });
});
