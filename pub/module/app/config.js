define([

], function() {
  'use strict';

  return function AppConfig($locationProvider, $mdIconProvider) {

    AppConfig.$inject = ['$locationProvider', '$mdIconProvider'];

    $locationProvider.hashPrefix('!');

    $mdIconProvider.defaultIconSet('/resource/material-icons.svg', 24);
  }
});
