define([
  'module/sidenav/controller',
  'css!module/sidenav/styles'

], function(SidenavController) {
  'use strict';

  var module = angular.module('swot.sidenav', []);
  module.controller('SidenavController', SidenavController);
  return module;
});
