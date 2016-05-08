define([

], function() {
  'use strict';

  return function AppConfig($locationProvider, $mdIconProvider, $componentLoaderProvider) {

    AppConfig.$inject = ['$locationProvider', '$mdIconProvider', '$componentLoaderProvider'];

    $locationProvider.hashPrefix('!');

    $mdIconProvider.defaultIconSet('/resource/material-icons.svg', 24);

    $componentLoaderProvider.setTemplateMapping(function (name) {
      return './module/' + name + '/template.html';
    });
	}
});
