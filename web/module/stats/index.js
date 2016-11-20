define([
  'module/stats/controller'
  
], function(StatsController) {
	'use strict';

  var module = angular.module('swot.stats', []);
  module.controller('StatsController', StatsController);
  return module;
});
