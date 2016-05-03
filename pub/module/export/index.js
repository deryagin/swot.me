define([
  'module/export/controller'

], function(ExportController) {
	'use strict';

  var module = angular.module('swot.export', []);
  module.controller('ExportController', ExportController);
  return module;
});
