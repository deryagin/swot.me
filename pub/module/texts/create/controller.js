define([

], function() {
  'use strict';

  return function TextsCreateController($state, TextsService) {

    TextsCreateController.$inject = ['$state', 'TextsService'];

    var self = this;

    self.title = '';

    self.content = '';

    self.createByCopyIn = function createByCopyIn() {

      if (!self.title || ! self.content) {
        return;
      }

      var created = TextsService.create({
        title: self.title,
        content: self.content
      });

      if (created) {
        $state.go('texts.list')
      }
    }
  };
});
