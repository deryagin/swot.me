define([

], function() {
  'use strict';

  return function SidenavController($rootScope, $state, $mdSidenav) {

    SidenavController.$inject = ['$rootScope', '$state', '$mdSidenav'];

    var self = this;

    self.accountStates = ['register', 'login'];

    self.currentMenu = $state.$current.name.split('.')[0] || 'start';

    self.currentContent = (-1 === self.accountStates.indexOf(self.currentMenu) ? 'defaultMenu' : 'accountMenu');

    self.toggleContent = function toggleContent() {
      self.currentContent = ('defaultMenu' === self.currentContent ? 'accountMenu' : 'defaultMenu');
    };

    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      self.currentMenu = toState.name.split('.')[0];
      $mdSidenav('sidenav-left').close();
    });

    $rootScope.sidenav = {
      toggle: function toggle() {
        $mdSidenav('sidenav-left').toggle();
      }
    }
  }
});
