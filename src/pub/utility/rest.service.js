define([
  'utility/http.transport'

], function(HttpTransport) {
  'use strict';

  return function RestService(baseUrl) {

    var self = this;

    self.baseUrl = baseUrl;

    self.transport = new HttpTransport();

    self.create = function create(props) {
      return self.transport.send(self.baseUrl + '/create', props);
    };

    self.read = function read(id) {
      return self.transport.send(self.baseUrl + '/read', {id: id});
    };

    self.update = function update(props) {
      return self.transport.send(self.baseUrl + '/update', props);
    };

    self.delete = function deleteIt(id) {
      return self.transport.send(self.baseUrl + '/delete', {id: id});
    };
  }
});
