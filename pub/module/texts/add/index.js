define([
  'module/texts/add/controller'

], function(TextsAddController) {
  'use strict';

  var module = angular.module('swot.texts.add', []);
  module.controller('TextsAddController', TextsAddController);
  return module;
});
