define([
	'module/words/controller'
  
], function(WordsController) {
	'use strict';

  var module = angular.module('swot.words', []);
  module.controller('WordsController', WordsController);
  return module;
});
