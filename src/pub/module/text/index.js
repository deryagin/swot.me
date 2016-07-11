define([
  'module/text/routes',
  'module/text/create/index',
  'module/text/read/index',
  'module/text/list/index',
  'service/text.service'

], function(TextRoutes, CreateModule, ReadModule, ListModule, TextService) {
  'use strict';

  var module = angular.module('swot.text', [
    CreateModule.name,
    ReadModule.name,
    ListModule.name
  ]);
  module.config(TextRoutes);
  module.service('TextService', TextService);
  return module;
});
