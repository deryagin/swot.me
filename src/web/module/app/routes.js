define([

], function() {
  'use strict';

  return function AppRoutes($stateProvider, $urlRouterProvider) {

    AppRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    $urlRouterProvider.when('', '/start');

    $urlRouterProvider.when('/', '/start');

    $stateProvider.state('start', {
        url: '/start',
        views: {
          'app.sidenav@': {
            templateUrl: '/module/sidenav/template.html',
            controller: 'SidenavController',
            controllerAs: 'sidenav'
          },
          'app.content@': {
            templateUrl: '/module/start/template.html',
            controller: 'StartController',
            controllerAs: 'start'
          }
        }
      });

    $stateProvider.state('words', {
      url: '/words',
      views: {
        'app.sidenav@': {
          templateUrl: '/module/sidenav/template.html',
          controller: 'SidenavController',
          controllerAs: 'sidenav'
        },
        'app.content@': {
          templateUrl: '/module/words/template.html',
          controller: 'WordsController',
          controllerAs: 'words'
        }
      }
    });

    $stateProvider.state('register', {
      url: '/register',
      views: {
        'app.sidenav@': {
          templateUrl: '/module/sidenav/template.html',
          controller: 'SidenavController',
          controllerAs: 'sidenav'
        },
        'app.content@': {
          templateUrl: '/module/register/template.html',
          controller: 'RegisterController',
          controllerAs: 'register'
        }
      }
    });

    $stateProvider.state('login', {
      url: '/login',
      views: {
        'app.sidenav@': {
          templateUrl: '/module/sidenav/template.html',
          controller: 'SidenavController',
          controllerAs: 'sidenav'
        },
        'app.content@': {
          templateUrl: '/module/login/template.html',
          controller: 'LoginController',
          controllerAs: 'login'
        }
      }
    });
  };
});
