define([

], function() {
  'use strict';

  return function TextService() {

    TextService.$inject = [];

    var self = this;

    self.collection = [
      {
        id: '11111',
        title: 'Criminal Minds - 1x02',
        createdAt: '2016-06-09T09:31:55.362Z',
        accessedAt: '2016-06-09T10:31:55.362Z',
        content: 'This is "11111" text content.'
      },
      {
        id: '22222',
        title: 'Avatar (2009).TS.ViSiON.en',
        createdAt: '2016-07-09T09:31:55.362Z',
        accessedAt: '2016-06-10T10:31:55.362Z',
        content: 'This is "22222" text content.'
      },
      {
        id: '33333',
        title: 'Criminal Minds - 1x01 - Extreme Aggressor.en',
        createdAt: '2016-08-09T09:31:55.362Z',
        accessedAt: '2016-06-08T10:31:55.362Z',
        content: 'This is "33333" text content.'
      },
      {
        id: '44444',
        title: 'Criminal Minds - 1x01',
        createdAt: '2016-09-09T09:31:55.362Z',
        accessedAt: '2016-06-11T10:31:55.362Z',
        content: 'This is "44444" text content.'
      },
      {
        id: '55555',
        title: 'The.Passionate.Programmer.May.2009',
        createdAt: '2016-10-09T09:31:55.362Z',
        accessedAt: '2016-06-07T10:31:55.362Z',
        content: 'This is "55555" text content.'
      },
      {
        id: '66666',
        title: 'In Treatment - 1x02 - Alex - Week One.0TV.en',
        createdAt: '2016-11-09T09:31:55.362Z',
        accessedAt: '2016-06-12T10:31:55.362Z',
        content: 'This is "66666" text content.'
      },
      {
        id: '77777',
        title: 'In Treatment - 1x01 - Laura - Week One.2HD.en',
        createdAt: '2016-12-09T09:31:55.362Z',
        accessedAt: '2016-06-06T10:31:55.362Z',
        content: 'This is "77777" text content.'
      }
    ];

    self.create = function create(text) {
      text.id = Math.round(Math.random() * 1000000);
      text.createdAt = new Date();
      text.accessedAt = new Date();
      text.content = 'This is ' + text.id + ' text content.';
      self.collection.push(text);
      return true;
    };

    self.read = function read(id) {
      return self.findOne(id);
    };

    self.update = function update(props) {
      var text = self.findOne(props.id);
      text.title = props.title;
    };

    self.delete = function remove(id) {
      var text = self.findOne(id);
      var index = self.collection.indexOf(text);
      self.collection.splice(index, 1);
    };

    self.list = function list() {
      return self.collection;
    };

    self.findOne = function findOne(id) {
      return self.collection.find(function (item) {
        return item.id === id;
      });
    };
  }
});
