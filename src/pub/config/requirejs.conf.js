define([

], function() {
  'use strict';

  require.config({
    baseUrl: '/',

    paths: {
      'angular': [
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min',
        '/vendor/node_modules/angular/angular.min'
      ],
      'angular-aria': [
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-aria.min',
        '/vendor/node_modules/angular-aria/angular-aria.min'
      ],
      'angular-animate': [
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-animate.min',
        '/vendor/node_modules/angular-animate/angular-animate.min'
      ],
      'angular-messages': [
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-messages.min',
        '/vendor/node_modules/angular-messages/angular-messages.min'
      ],
      'angular-material': [
        'https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc.5/angular-material.min',
        '/vendor/node_modules/angular-material/angular-material.min'
      ],
      'angular-ui-router': [
        'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.min',
        '/vendor/node_modules/angular-ui-router/release/angular-ui-router'
      ],
      'whatwg-fetch': [
        'https://cdnjs.cloudflare.com/ajax/libs/fetch/1.0.0/fetch.min',
        '/vendor/node_modules/whatwg-fetch/fetch'
      ]
    },

    shim: {
      'angular': {exports: 'angular'},
      'angular-aria': {deps: ['angular']},
      'angular-animate': {deps: ['angular']},
      'angular-messages': {deps: ['angular']},
      'angular-material': {deps: ['angular', 'angular-aria', 'angular-animate']},
      'angular-ui-router': {deps: ['angular']},
      'whatwg-fetch': {exports: 'fetch'}
    },

    map: {
      '*': {'css': 'vendor/node_modules/require-css/css'}
    }
  });
});
