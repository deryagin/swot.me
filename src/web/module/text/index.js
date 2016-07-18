define([
  'module/text/create/index',
  'module/text/read/index',
  'module/text/list/index',
  'module/text/service',
  'module/text/routes'

], function(CreateModule, ReadModule, ListModule, ServiceFactory, TextRoutes) {
  'use strict';

  var module = angular.module('swot.text', [
    CreateModule.name,
    ReadModule.name,
    ListModule.name
  ]);
  module.config(TextRoutes);
  module.service('ServiceFactory', ServiceFactory);
  return module;
});
