define([
  'module/login/controller'

], function(LoginController) {
  'use strict';

  var module = angular.module('swot.login', []);
  module.controller('LoginController', LoginController);
  return module;
});
