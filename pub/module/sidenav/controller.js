define([

], function() {
  'use strict';

  return function SidenavController($rootScope, $state, $mdSidenav) {

    SidenavController.$inject = ['$rootScope', '$state', '$mdSidenav'];

    var self = this;

    self.currentMenu = $state.$current.name.split('.')[0] || 'start';

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      self.currentMenu = toState.name.split('.')[0];
      $mdSidenav('sidenav-left').close();
    });

    $rootScope.sidenav = {
      toggleMenu: function toggleMenu() {
        $mdSidenav('sidenav-left').toggle();
      }
    }
  }
});
