define([
  'utility/rest.service'

], function(RestService) {
  'use strict';

  return function TextService() {

    var self = this;

    self.createItemService = function createItemService() {
      return new RestService('/text');
    };

    self.createListService = function createListService() {
      return new RestService('/text/list');
    };
  };
});
