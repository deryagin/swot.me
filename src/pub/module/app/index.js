define([
  'module/app/config',
  'module/app/routes',
  'module/app/controller'

], function(AppConfig, AppRoutes, AppController) {
  'use strict';

  var vendorDeps = ['ngMessages', 'ngMaterial', 'ui.router'];
  var module = angular.module('swot.app', vendorDeps);
  module.controller('AppController', AppController);
  module.config(AppConfig);
  module.config(AppRoutes);
  return module;
});
