define([
  'module/about/controller'

], function(AboutController) {
	'use strict';

  var module = angular.module('swot.about', []);
  module.controller('AboutController', AboutController);
  return module;
});
