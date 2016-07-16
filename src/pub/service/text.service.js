define([
  'service/http.transport'

], function(HttpTransport) {
  'use strict';

  return function TextService() {

    var self = this;

    var transport = new HttpTransport();

    self.create = function create(text) {
      var result = [];
      result.promise = transport.send('/text/create', text);
      return result;
    };

    self.read = function read(id) {
      var result = [];
      result.promise = transport.send('/text/read', {id: id});
      return result;
    };

    self.update = function update(props) {
      var result = [];
      result.promise = transport.send('/text/update', props);
      return result;
    };

    self.delete = function deleteIt(id) {
      var result = [];
      result.promise = transport.send('/text/delete', {id: id});
      return result;
    };

    self.list = function list(params, succeed, failed) {
      var result = [];
      result.promise = transport.send('/text/list', params)
        .then(succeed)
        .catch(failed);
      return result;
    };
  }
});
