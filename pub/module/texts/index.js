define([
  'module/texts/routes',
  'module/texts/list/index',
  'module/texts/create/index'

], function(TextsRoutes, ListModule, CreateModule) {
  'use strict';

  var module = angular.module('swot.texts', [
    ListModule.name,
    CreateModule.name
  ]);
  module.config(TextsRoutes);
  return module;
});
