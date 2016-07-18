define([

], function() {
  'use strict';

  return function textCreateController($state, ServiceFactory) {

    textCreateController.$inject = ['$state', 'ServiceFactory'];

    var self = this;

    self.title = '';

    self.content = '';

    self.copyIn = function copyIn() {
      var TextItemService = ServiceFactory.createListService();
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
