define([

], function() {
  'use strict';

  return function AppRoutes($stateProvider, $urlRouterProvider) {

    AppRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

    $urlRouterProvider.when('', '/start');
    $urlRouterProvider.when('/', '/start');

    $stateProvider
      .state('start', {
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
  };

  // return [
  //   {path: '/', redirectTo: '/texts'},
  //   {path: '/texts', component: {sidenav: 'sidenav', content: 'texts'}},
  //   {path: '/words', component: {sidenav: 'sidenav', content: 'words'}},
  //   {path: '/stats', component: {sidenav: 'sidenav', content: 'stats'}},
  //   {path: '/import', component: {sidenav: 'sidenav', content: 'import'}},
  //   {path: '/export', component: {sidenav: 'sidenav', content: 'export'}},
  //   {path: '/settings', component: {sidenav: 'sidenav', content: 'settings'}},
  //   {path: '/news', component: {sidenav: 'sidenav', content: 'news'}},
  //   {path: '/ideas', component: {sidenav: 'sidenav', content: 'ideas'}},
  //   {path: '/help', component: {sidenav: 'sidenav', content: 'help'}},
  //   {path: '/about', component: {sidenav: 'sidenav', content: 'about'}}
  // ];
});
