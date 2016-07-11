define([

], function() {
  'use strict';

  return function SidenavConfig($mdIconProvider) {

    SidenavConfig.$inject = ['$mdIconProvider'];

    $mdIconProvider.iconSet('sidenav', '/module/sidenav/icons.svg', 24);
  }
});
