define([
  'module/text/list/config',
  'module/text/list/controller',
  'service/text.item.service',
  'service/text.list.service',
  'css!module/text/list/styles'

], function(TextConfig, TextListController, TextItemService, TextListService) {
  'use strict';

  var module = angular.module('swot.text.list', []);
  module.config(TextConfig);
  module.controller('TextListController', TextListController);
  module.service('TextItemService', TextItemService);
  module.service('TextListService', TextListService);
  return module;
});
