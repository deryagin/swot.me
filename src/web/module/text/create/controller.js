define([

], function() {
  'use strict';

  return function textCreateController($state, TextItemService) {

    textCreateController.$inject = ['$state', 'TextItemService'];

    var self = this;

    self.title = '';

    self.content = '';

    self.copyIn = function copyIn() {

      var created = TextItemService.create({
        title: self.title,
        content: self.content
      });

      if (created) {
        $state.go('text.list')
      }
    }
  };
});
