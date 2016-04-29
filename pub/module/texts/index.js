define([
	'module/texts/controller'

], function(TextsController) {
	'use strict';

  var module = angular.module('swot.texts', []);
  module.controller('TextsController', TextsController);
  return module;
});
