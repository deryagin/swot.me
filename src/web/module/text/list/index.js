define([
  'module/text/list/config',
  'module/text/list/controller',
  'css!module/text/list/styles'

], function(TextConfig, TextListController) {
  'use strict';

  var module = angular.module('swot.text.list', []);
  module.config(TextConfig);
  module.controller('TextListController', TextListController);
  return module;
});
