define([
  'module/text/create/controller'

], function(TextCreateController) {
  'use strict';

  var module = angular.module('swot.text.add', []);
  module.controller('TextCreateController', TextCreateController);
  return module;
});
