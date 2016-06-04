define([

], function() {
  'use strict';

  return function TextsListController($mdDialog, TextsService) {

    TextsListController.$inject = ['$mdDialog', 'TextsService'];

    var self = this;

    self.textList = TextsService.list();

    self.currentOrder = 'newest';

    self.rename = function rename(textId) {
      var text = TextsService.findOne(textId);
      var confirm = $mdDialog.prompt()
        .title('Enter new name:')
        .placeholder(text.name)
        .ariaLabel('Text Rename')
        .ok('Ok')
        .cancel('Cancel');
      $mdDialog.show(confirm).then(function (newName) {
        if (newName) {
          TextsService.update({ id: textId, name: newName});
        }
      });
    };

    self.remove = function remove(textId) {
      var text = TextsService.findOne(textId);
      var confirmDialog = $mdDialog.confirm()
        .title('Would you like to delete:')
        .textContent(text.name)
        .ariaLabel('Text Delete')
        .ok('Ok')
        .cancel('Cancel');
      $mdDialog.show(confirmDialog).then(function () {
        TextsService.delete(textId);
      });
    };

    self.orderBy = function orderBy(selectedOrder) {
      self.currentOrder = selectedOrder;
    };
  };
});
