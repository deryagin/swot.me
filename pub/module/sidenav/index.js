define([
  'module/sidenav/config',
  'module/sidenav/controller',
  'css!module/sidenav/styles'

], function(SidenavConfig, SidenavController) {
  'use strict';

  var module = angular.module('swot.sidenav', []);
  module.controller('SidenavController', SidenavController);
  module.config(SidenavConfig);
  return module;
});
