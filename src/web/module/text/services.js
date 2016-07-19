define([
  'utility/rest.service'

], function(RestService) {
  'use strict';

  return function TextServices() {

    var self = this;

    self.createItemService = function createItemService() {
      return new RestService('/api/text');
    };

    self.createListService = function createListService() {
      return new RestService('/api/text/list');
    };
  };
});
