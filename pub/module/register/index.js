define([
  'module/register/controller'

], function(RegisterController) {
  'use strict';

  var module = angular.module('swot.register', []);
  module.controller('RegisterController', RegisterController);
  return module;
});
