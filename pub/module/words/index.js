define([
	'module/words/route',
	'module/words/controller'
], function(RouteProvider, WordsController) {
	'use strict';

  var module = angular.module('words', []);
  module.config(RouteProvider);
  module.controller('WordsController', WordsController);
  return module;
});
