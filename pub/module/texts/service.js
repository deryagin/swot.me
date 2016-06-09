define([

], function() {
  'use strict';

  return function TextsService() {

    TextsService.$inject = [];

    var self = this;

    self.textList = [
      {
        id: 11111,
        title: 'Criminal Minds - 1x02',
        createdAt: '2016-06-09T09:31:55.362Z',
        accessedAt: '2016-06-09T10:31:55.362Z'
      },
      {
        id: 22222,
        title: 'Avatar (2009).TS.ViSiON.en',
        createdAt: '2016-07-09T09:31:55.362Z',
        accessedAt: '2016-06-10T10:31:55.362Z'
      },
      {
        id: 33333,
        title: 'Criminal Minds - 1x01 - Extreme Aggressor.en',
        createdAt: '2016-08-09T09:31:55.362Z',
        accessedAt: '2016-06-08T10:31:55.362Z'
      },
      {
        id: 44444,
        title: 'Criminal Minds - 1x01',
        createdAt: '2016-09-09T09:31:55.362Z',
        accessedAt: '2016-06-11T10:31:55.362Z'
      },
      {
        id: 55555,
        title: 'The.Passionate.Programmer.May.2009',
        createdAt: '2016-10-09T09:31:55.362Z',
        accessedAt: '2016-06-07T10:31:55.362Z'
      },
      {
        id: 66666,
        title: 'In Treatment - 1x02 - Alex - Week One.0TV.en',
        createdAt: '2016-11-09T09:31:55.362Z',
        accessedAt: '2016-06-12T10:31:55.362Z'
      },
      {
        id: 77777,
        title: 'In Treatment - 1x01 - Laura - Week One.2HD.en',
        createdAt: '2016-12-09T09:31:55.362Z',
        accessedAt: '2016-06-06T10:31:55.362Z'
      }
    ];

    self.create = function create(text) {
      text.id = Math.round(Math.random() * 1000000);
      self.textList.push(text);
      return true;
    };

    self.read = function read(id) {

    };

    self.update = function update(props) {
      var text = self.findOne(props.id);
      text.title = props.title;
    };

    self.delete = function remove(id) {
      var text = self.findOne(id);
      var index = self.textList.indexOf(text);
      self.textList.splice(index, 1);
    };

    self.list = function list() {
      return self.textList;
    };

    self.findOne = function findOne(textId) {
      return self.textList.find(function (text) {
        return text.id === textId;
      });
    };
  }
});
