define([
	'config'

], function() {
  'use strict';

  require([
    // 'module/main/index',
    'module/words/index'
  ], function (words) {
    var application = angular.module('appication', ['ngRoute', 'ngMaterial', 'words']);
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
