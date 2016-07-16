define([
  'whatwg-fetch'

], function() {
  'use strict';

  return function HttpTransport() {

    var self = this;

    var headers = {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    };

    var options = {
      method: 'POST',
      headers: headers,
      mode: 'same-origin',
      credentials: 'same-origin'
    };

    self.send = function send(url, body) {
      var request = new Request(url, options);
      request.body = JSON.stringify(body);
      return fetch(request)
        .then(self.checkStatus)
        .then(self.parseJSON);
    };

    self.checkStatus = function checkStatus(response) {
      if (response.ok) {
        return response;
      } else {
        return new Error(response.statusText);
      }
    };

    self.parseJSON = function parseJSON(response) {
      return response.json();
    }
  };
});
