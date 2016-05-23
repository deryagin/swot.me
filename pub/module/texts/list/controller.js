define([

], function() {
  'use strict';

  return function TextsListController() {

    TextsListController.$inject = [];

    var self = this;

    self.currentOrder = 'newest';

    self.orderBy = function orderBy(selectedOrder) {
      self.currentOrder = selectedOrder;
    };

    self.textList = [
      {
        id: 11111,
        name: 'Criminal Minds - 1x02'
      },
      {
        id: 22222,
        name: 'Avatar (2009).TS.ViSiON.en'
      },
      {
        id: 33333,
        name: 'Criminal Minds - 1x01 - Extreme Aggressor.en'
      },
      {
        id: 44444,
        name: 'Criminal Minds - 1x01'
      },
      {
        id: 55555,
        name: 'The.Passionate.Programmer.May.2009'
      },
      {
        id: 66666,
        name: 'In Treatment - 1x02 - Alex - Week One.0TV.en'
      },
      {
        id: 77777,
        name: 'In Treatment - 1x01 - Laura - Week One.2HD.en'
      }
    ];
  };
});
