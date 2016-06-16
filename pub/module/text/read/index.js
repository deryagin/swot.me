define([
  'module/text/read/controller'

], function(TextReadController) {
  'use strict';

  var module = angular.module('swot.text.read', []);
  module.controller('TextReadController', TextReadController);
  return module;
});
