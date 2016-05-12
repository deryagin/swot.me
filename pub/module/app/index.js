define([
  'module/app/config',
  'module/app/routes',
  'module/app/controller'

], function(AppConfig, AppRoutes, AppController) {
  'use strict';

  var module = angular.module('swot.app', ['ui.router', 'ngMaterial']);
  module.controller('AppController', AppController);
  module.config(AppConfig);
  module.config(AppRoutes);
  return module;
});
