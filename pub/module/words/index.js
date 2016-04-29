define([
	'module/words/controller'
  
], function(WordsController) {
	'use strict';

  var module = angular.module('words', []);
  module.controller('WordsController', WordsController);
  return module;
});
