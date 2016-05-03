define([
  'module/help/controller'
  
], function(HelpController) {
	'use strict';

  var module = angular.module('swot.help', []);
  module.controller('HelpController', HelpController);
  return module;
});
