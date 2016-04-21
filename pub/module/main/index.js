define([

], function() {
  'use strict';

  var main = angular.module('main', ['ngRoute', 'ngMaterial']);

  main.config(['$locationProvider', function ($locationProvider) {
      $locationProvider.hashPrefix('!');
    }
  ]);
  return main;
});

