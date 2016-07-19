define([
  'utility/http.transport'

], function(HttpTransport) {
  'use strict';

  return function RestService(baseUrl) {

    var self = this;

    self.baseUrl = baseUrl;

    self.transport = new HttpTransport();

    self.create = function create(json) {
      return self.transport.send(self.baseUrl + '/create', json);
    };

    self.read = function read(json) {
      return self.transport.send(self.baseUrl + '/read', json);
    };

    self.update = function update(json) {
      return self.transport.send(self.baseUrl + '/update', json);
    };

    self.delete = function deleteIt(json) {
      return self.transport.send(self.baseUrl + '/delete', json);
    };
  }
});
