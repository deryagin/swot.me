define([
  'module/texts/controller'

], function(TextsController) {
	'use strict';

  // RouteProvider.$inject = ['$routeProvider'];

  return function RouteProvider($routeProvider) {
    $routeProvider
      .when('/texts', {
        controller: TextsController.name,
        templateUrl: '/module/texts/texts.tpl.html'
      });
  };

  // return RouteProvider;
});
