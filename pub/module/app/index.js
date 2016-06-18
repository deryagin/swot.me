define([
  'module/app/config',
  'module/app/routes',
  'module/app/controller'

], function(AppConfig, AppRoutes, AppController) {
  'use strict';

  var requires = ['ui.router', 'ngMessages', 'ngMaterial'];
  var module = angular.module('swot.app', requires);
  module.controller('AppController', AppController);
  module.config(AppConfig);
  module.config(AppRoutes);
  return module;
});
