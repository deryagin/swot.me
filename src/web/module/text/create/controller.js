define([

], function() {
  'use strict';

  return function textCreateController($state, TextServices) {

    textCreateController.$inject = ['$state', 'TextServices'];

    var self = this;

    self.title = '';

    self.content = '';

    self.copyIn = function copyIn() {
      var TextItemService = TextServices.createListService();
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
