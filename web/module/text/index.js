define([
  'module/text/create/index',
  'module/text/read/index',
  'module/text/list/index',
  'module/text/services',
  'module/text/routes'

], function(CreateModule, ReadModule, ListModule, TextServices, TextRoutes) {
  'use strict';

  var module = angular.module('swot.text', [
    CreateModule.name,
    ReadModule.name,
    ListModule.name
  ]);
  module.config(TextRoutes);
  module.service('TextServices', TextServices);
  return module;
});
