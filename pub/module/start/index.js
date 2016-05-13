define([
  'module/start/controller'

], function(StartController) {
  'use strict';

  var module = angular.module('swot.start', []);
  module.controller('StartController', StartController);
  return module;
});
