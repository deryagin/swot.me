define([
  'module/news/controller'

], function(NewsController) {
	'use strict';

  var module = angular.module('swot.news', []);
  module.controller('NewsController', NewsController);
  return module;
});
