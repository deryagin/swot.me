define([
  'module/texts/routes',
  'module/texts/service',
  'module/texts/create/index',
  'module/texts/read/index',
  'module/texts/list/index'

], function(TextsRoutes, TextsService, CreateModule, ReadModule, ListModule) {
  'use strict';

  var module = angular.module('swot.texts', [
    CreateModule.name,
    ReadModule.name,
    ListModule.name
  ]);
  module.config(TextsRoutes);
  module.service('TextsService', TextsService);
  return module;
});
