define([

], function() {
  'use strict';

  return function TextListConfig($mdIconProvider) {

    TextListConfig.$inject = ['$mdIconProvider'];

    $mdIconProvider.iconSet('text', '/module/text/list/icons.svg', 24)
  }
});
