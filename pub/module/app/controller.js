define([
  'module/app/routes'

], function(routes) {
  'use strict';

  return function AppController($router, $mdSidenav) {

    AppController.$inject = ['$router', '$mdSidenav'];

    $router.config(routes);
    
    this.toggleMenu = function toggleMenu() {
      $mdSidenav('sidenav-left').toggle();
    };
  }
});
