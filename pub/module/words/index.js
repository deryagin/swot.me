define([
	'module/words/route',
	'module/words/controller'
], function(RouteProvider, WordsController) {
	'use strict';

  var words = angular.module('words', []);
  words.config(RouteProvider);
  words.controller('WordsController', WordsController);
  return words;
});
