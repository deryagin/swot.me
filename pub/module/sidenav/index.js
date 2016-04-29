define([
	'module/sidenav/controller'

], function(SidenavController) {
	'use strict';

  var module = angular.module('swot.sidenav', []);
  module.controller('SidenavController', SidenavController);
  return module;
});
