define([
  'module/texts/routes',
  'module/texts/create/index',
  'module/texts/read/index',
  'module/texts/list/index'

], function(TextsRoutes, CreateModule, ReadModule, ListModule) {
  'use strict';

  var module = angular.module('swot.texts', [
    CreateModule.name,
    ReadModule.name,
    ListModule.name
  ]);
  module.config(TextsRoutes);
  return module;
});
