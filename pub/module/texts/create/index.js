define([
  'module/texts/create/controller'

], function(TextsCreateController) {
  'use strict';

  var module = angular.module('swot.texts.add', []);
  module.controller('TextsCreateController', TextsCreateController);
  return module;
});
