define([
  'module/words/controller'
  
], function(WordsController) {
	'use strict';

  // RouteProvider.$inject = ['$routeProvider'];

  return function RouteProvider($routeProvider) {
    $routeProvider
      .when('/', {
        controller: WordsController.name,
        templateUrl: '/module/words/words.tpl.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  };

  // return RouteProvider;
});
