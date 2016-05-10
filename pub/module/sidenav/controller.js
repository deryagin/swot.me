define([

], function() {
  'use strict';

  return function SidenavController($location, $mdSidenav) {

    SidenavController.$inject = ['$location', '$mdSidenav'];

    this.selectedMenu = $location.path().substr(1) || 'texts';

    this.navigateTo = function (menuName) {
      this.selectedMenu = menuName;
      $location.path('/' + menuName);
      $mdSidenav('sidenav-left').toggle();
    };
  }
});
