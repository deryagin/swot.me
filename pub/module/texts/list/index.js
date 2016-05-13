define([
  'module/texts/list/controller'

], function(TextsListController) {
  'use strict';

  var module = angular.module('swot.texts.list', []);
  module.controller('TextsListController', TextsListController);
  return module;
});
