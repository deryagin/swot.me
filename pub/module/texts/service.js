define([

], function() {
  'use strict';

  return function TextsService() {

    TextsService.$inject = [];

    var self = this;

    self.textList = [
      {
        id: 11111,
        title: 'Criminal Minds - 1x02'
      },
      {
        id: 22222,
        title: 'Avatar (2009).TS.ViSiON.en'
      },
      {
        id: 33333,
        title: 'Criminal Minds - 1x01 - Extreme Aggressor.en'
      },
      {
        id: 44444,
        title: 'Criminal Minds - 1x01'
      },
      {
        id: 55555,
        title: 'The.Passionate.Programmer.May.2009'
      },
      {
        id: 66666,
        title: 'In Treatment - 1x02 - Alex - Week One.0TV.en'
      },
      {
        id: 77777,
        title: 'In Treatment - 1x01 - Laura - Week One.2HD.en'
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
