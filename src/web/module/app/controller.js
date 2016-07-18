define([

], function() {
  'use strict';

  return function AppController($state) {

    AppController.$inject = ['$state'];

    var self = this;

    self.navigateTo = function navigateTo(stateName, params) {
      $state.go(stateName, params);
    };
  }
});
