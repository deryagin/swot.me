define([

], function() {
  'use strict';

  return function TextsListConfig($mdIconProvider) {

    TextsListConfig.$inject = ['$mdIconProvider'];

    $mdIconProvider.iconSet('text', '/module/texts/list/icons.svg', 24)
  }
});
