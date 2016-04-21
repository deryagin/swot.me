define([
	'config'

], function() {
  'use strict';

  require([
    'module/words/index',
    'module/texts/index'
  ], function (words, texts) {
    var application = angular.module('appication', ['ngRoute', 'ngMaterial']);
    application.requires.push(words.name);
    application.requires.push(texts.name);

    application.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('!');
      }
    ]);

    angular.bootstrap(document, [application.name]);
  });
});
