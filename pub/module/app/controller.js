define([

], function() {
  'use strict';

  return function AppController($mdSidenav) {

    AppController.$inject = ['$mdSidenav'];

    this.toggleMenu = function toggleMenu() {
      $mdSidenav('sidenav-left').toggle();
    };
  }
});
