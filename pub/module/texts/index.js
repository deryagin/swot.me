define([
	'module/texts/route',
	'module/texts/controller'
], function(RouteProvider, TextsController) {
	'use strict';

  var words = angular.module('texts', []);
  words.config(RouteProvider);
  words.controller('TextsController', TextsController);
  return words;
});
