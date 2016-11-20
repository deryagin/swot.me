define([
  'module/ideas/controller'
  
], function(IdeasController) {
	'use strict';

  var module = angular.module('swot.ideas', []);
  module.controller('IdeasController', IdeasController);
  return module;
});
