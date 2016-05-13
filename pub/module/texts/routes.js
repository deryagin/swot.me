define([

], function() {
  'use strict';

  return function TextsRoutes($stateProvider) {

    TextsRoutes.$inject = ['$stateProvider'];

    $stateProvider.state('texts', {
      abstract: true,
      url: '/texts',
      views: {
        'app.sidenav@': {
          templateUrl: '/module/sidenav/template.html',
          controller: 'SidenavController',
          controllerAs: 'sidenav'
        },
        'app.content@': {
          template: '<div ui-view="texts.content"></div>'
        }
      }
    });

    $stateProvider.state('texts.list', {
      url: '/list',
      views: {
        'texts.content@texts': {
          templateUrl: '/module/texts/list/template.html',
          controller: 'TextsListController',
          controllerAs: 'textsList'
        }
      }
    });

    $stateProvider.state('texts.add', {
      url: '/add',
      views: {
        'texts.content@texts': {
          templateUrl: '/module/texts/add/template.html',
          controller: 'TextsAddController',
          controllerAs: 'textsAdd'
        }
      }
    });
  }
});
