define([
	'module/app/routes'

], function(routes) {
	'use strict';

  return function AppController($router) {

    AppController.$inject = ['$router'];

    $router.config(routes);
  }
});
