define([
  'module/text/routes',
  'module/text/create/index',
  'module/text/read/index',
  'module/text/list/index'

], function(TextRoutes, CreateModule, ReadModule, ListModule) {
  'use strict';

  var module = angular.module('swot.text', [
    CreateModule.name,
    ReadModule.name,
    ListModule.name
  ]);
  module.config(TextRoutes);
  return module;
});
