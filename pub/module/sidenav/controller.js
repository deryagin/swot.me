define([

], function() {
	'use strict';

  return function SidenavController($location) {

    SidenavController.$inject = ['$location'];

    this.click = function (name) {
      $location.path('/' + name);
    };
  }
});
