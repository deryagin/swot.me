define([

], function() {
	'use strict';

  return function SidenavController($scope) {

    SidenavController.$inject = ['$scope'];

    $scope.click = function () {
      alert('SidenavController');
    };
  }
});
