define([
	'config'

], function() {
  'use strict';

  require([
    'module/words/index',
    'module/texts/index'
  ], function (words) {
    var application = angular.module('appication', ['ngRoute', 'ngMaterial', 'words', 'texts']);
    // application.$inject = ['ngRoute', 'ngMaterial', 'words'];
    // application.$inject.push(main.name);
    // application.$inject.push(words.name);

    application.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('!');
      }
    ]);

    angular.bootstrap(document, [application.name]);
  });
});
