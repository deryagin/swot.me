define([

], function() {
  'use strict';

  return function TextRoutes($stateProvider) {

    TextRoutes.$inject = ['$stateProvider'];

    $stateProvider.state('text', {
      abstract: true,
      url: '/text',
      views: {
        'app.sidenav@': {
          templateUrl: '/module/sidenav/template.html',
          controller: 'SidenavController',
          controllerAs: 'sidenav'
        },
        'app.content@': {
          template: '<div ui-view="text.content" layout="column" flex></div>'
        }
      }
    });

    $stateProvider.state('text.list', {
      url: '/list',
      views: {
        'text.content@text': {
          templateUrl: '/module/text/list/template.html',
          controller: 'TextListController',
          controllerAs: 'textList'
        }
      }
    });

    $stateProvider.state('text.create', {
      url: '/create',
      views: {
        'text.content@text': {
          templateUrl: '/module/text/create/template.html',
          controller: 'TextCreateController',
          controllerAs: 'textCreate'
        }
      }
    });

    $stateProvider.state('text.read', {
      url: '/read/:id',
      views: {
        'text.content@text': {
          templateUrl: '/module/text/read/template.html'
        }
      }
    });
  }
});
