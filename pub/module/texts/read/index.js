define([
  'module/texts/read/controller'
  
], function(TextsReadController) {
  'use strict';

  var module = angular.module('swot.texts.read', []);
  module.controller('TextsReadController', TextsReadController);
  return module;
});
