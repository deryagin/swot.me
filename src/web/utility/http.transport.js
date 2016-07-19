define([
  'whatwg-fetch'

], function() {
  'use strict';

  return function HttpTransport() {

    var self = this;

    self.options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: '',
      mode: 'same-origin',
      credentials: 'same-origin'
    };

    self.send = function send(url, json) {
      self.options.body = JSON.stringify(json || {});
      return window.fetch(url, self.options)
        .then(self.checkStatus)
        .then(self.parseJSON);
    };

    self.checkStatus = function checkStatus(response) {
      return (response.ok ? response : new Error(response.statusText));
    };

    self.parseJSON = function parseJSON(response) {
      return response.json();
    }
  };
});
