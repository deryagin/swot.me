define([
	'module/texts/controller'
  
], function(TextsController) {
	'use strict';

  var module = angular.module('texts', []);
  module.controller('TextsController', TextsController);
  return module;
});
