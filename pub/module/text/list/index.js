define([
  'module/text/list/config',
  'module/text/list/controller',
  'css!module/text/list/styles'

], function(TextConfig, TextListController) {
  'use strict';

  var module = angular.module('swot.text.list', []);
  module.controller('TextListController', TextListController);
  module.config(TextConfig);
  return module;
});
