define([

], function() {
  'use strict';

  return function TextsController($mdSidenav) {

    TextsController.$inject = ['$mdSidenav'];

    this.toggleMenu = function toggleMenu() {
      $mdSidenav('sidenav-left').toggle();
    };
  };
});
