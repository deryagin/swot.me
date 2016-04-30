define([

], function() {
	'use strict';

	return function AppConfig($locationProvider, $componentLoaderProvider) {

    AppConfig.$inject = ['$locationProvider', '$componentLoaderProvider'];

    $locationProvider.hashPrefix('!');

    $componentLoaderProvider.setTemplateMapping(function (name) {
      return './module/' + name + '/template.html';
    });
	}
});
