define([
  'module/app/config',
  'module/app/controller'

], function(AppConfig, AppController) {
  'use strict';

  var module = angular.module('swot.app', ['ngNewRouter', 'ngMaterial']);
  module.controller('AppController', AppController);
  module.config(AppConfig);
  return module;
});
