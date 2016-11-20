define([
  'module/text/list/config',
  'module/text/list/controller',
  'module/text/list/dialogs',
  'css!module/text/list/styles'

], function(TextListConfig, TextListController, TextListDialogs) {
  'use strict';

  var module = angular.module('swot.text.list', []);
  module.config(TextListConfig);
  module.controller('TextListController', TextListController);
  module.service('TextListDialogs', TextListDialogs);
  return module;
});
