define([

], function() {
  'use strict';

  return function SidenavController($location) {

    SidenavController.$inject = ['$location'];

    this.selectedMenu = $location.path().substr(1) || 'texts';

    this.navigateTo = function (menuName) {
      this.selectedMenu = menuName;
      $location.path('/' + menuName);
    };
  }
});
