define([

], function() {
  'use strict';

  return function TextReadController($stateParams, TextService) {

    TextReadController.$inject = ['$stateParams', 'TextService'];

    var self = this;

    self.text = TextService.read($stateParams.id);
  };
});
