define([
	'module/texts/route',
	'module/texts/controller'
], function(RouteProvider, TextsController) {
	'use strict';

  var module = angular.module('texts', []);
  module.config(RouteProvider);
  module.controller('TextsController', TextsController);
  return module;
});
