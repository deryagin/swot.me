define([
  'module/texts/list/config',
  'module/texts/list/controller',
  'css!module/texts/list/styles'

], function(TextsConfig, TextsListController) {
  'use strict';

  var module = angular.module('swot.texts.list', []);
  module.controller('TextsListController', TextsListController);
  module.config(TextsConfig);
  return module;
});
