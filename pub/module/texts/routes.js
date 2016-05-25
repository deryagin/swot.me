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
          template: '<div ui-view="texts.content" layout="column" flex></div>'
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

    $stateProvider.state('texts.create', {
      url: '/create',
      views: {
        'texts.content@texts': {
          templateUrl: '/module/texts/create/template.html',
          controller: 'TextsCreateController',
          controllerAs: 'textsCreate'
        }
      }
    });
  }
});
