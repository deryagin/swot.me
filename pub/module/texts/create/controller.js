define([

], function() {
  'use strict';

  return function TextsCreateController($state, TextService) {

    TextsCreateController.$inject = ['$state', 'TextService'];

    var self = this;

    self.title = '';

    self.content = '';

    self.createByCopyIn = function createByCopyIn() {

      if (!self.title || ! self.content) {
        return;
      }

      var created = TextService.create({
        title: self.title,
        content: self.content
      });

      if (created) {
        $state.go('texts.list')
      }
    }
  };
});
