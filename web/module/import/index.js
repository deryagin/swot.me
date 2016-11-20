define([
  'module/import/controller'

], function(ImportController) {
	'use strict';

  var module = angular.module('swot.import', []);
  module.controller('ImportController', ImportController);
  return module;
});
