define([
  'module/texts/routes',
  'module/texts/list/index',
  'module/texts/add/index'

], function(TextsRoutes, ListModule, AddModule) {
  'use strict';

  var module = angular.module('swot.texts', [
    ListModule.name,
    AddModule.name
  ]);
  module.config(TextsRoutes);
  return module;
});
