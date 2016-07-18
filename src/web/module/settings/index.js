define([
  'module/settings/controller'
  
], function(SettingsController) {
	'use strict';

  var module = angular.module('swot.settings', []);
  module.controller('SettingsController', SettingsController);
  return module;
});
