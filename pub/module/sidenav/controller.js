define([

], function() {
  'use strict';

  return function SidenavController($state, $mdSidenav) {

    SidenavController.$inject = ['$state', '$mdSidenav'];

    this.currentMenu = $state.$current.name.split('.')[0] || 'start';

    this.navigateTo = function (stateName) {
      $state.go(stateName);
      this.currentMenu = stateName;
      $mdSidenav('sidenav-left').toggle();
    };
  }
});
