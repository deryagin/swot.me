define([

], function() {
  'use strict';

  return function TextsRoutes($stateProvider) {

    TextsRoutes.$inject = ['$stateProvider'];

    $stateProvider.state('texts', {
      abstract: true,
      url: '/texts',
      views: {
        'sidenav@': {
          templateUrl: '/module/sidenav/template.html',
          controller: 'SidenavController',
          controllerAs: 'sidenav'
        },
        'content@': {
          template: '<div ui-view="content"></div>'
        }
      }
    });

    $stateProvider.state('texts.list', {
      url: '/list',
      views: {
        'content@texts': {
          templateUrl: '/module/texts/list/template.html',
          controller: 'TextsListController',
          controllerAs: 'textsList'
        }
      }
    });

    $stateProvider.state('texts.add', {
      url: '/add',
      views: {
        'content@texts': {
          templateUrl: '/module/texts/add/template.html',
          controller: 'TextsAddController',
          controllerAs: 'textsAdd'
        }
      }
    });
  }
});
