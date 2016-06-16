define([
  'module/texts/routes',
  'module/texts/create/index',
  'module/texts/read/index',
  'module/texts/list/index',
  'service/text.service'

], function(TextsRoutes, CreateModule, ReadModule, ListModule, TextService) {
  'use strict';

  var module = angular.module('swot.texts', [
    CreateModule.name,
    ReadModule.name,
    ListModule.name
  ]);
  module.config(TextsRoutes);
  module.service('TextService', TextService);
  return module;
});
