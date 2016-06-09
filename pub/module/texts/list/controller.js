define([

], function() {
  'use strict';

  return function TextsListController($mdDialog, TextsService) {

    TextsListController.$inject = ['$mdDialog', 'TextsService'];

    var self = this;

    self.textList = TextsService.list();

    self.currentOrder = '+createdAt';
    
    self.showSearch = false;

    self.rename = function rename(textId) {
      var text = TextsService.findOne(textId);
      var confirmDialog = buildRenameDialog(text);
      $mdDialog.show(confirmDialog).then(function (newTitle) {
        if (newTitle && newTitle !== text.title) {
          TextsService.update({ id: textId, title: newTitle});
        }
      });
    };

    self.remove = function remove(textId) {
      var text = TextsService.findOne(textId);
      var confirmDialog = buildRemoveModal(text);
      $mdDialog.show(confirmDialog).then(function () {
        TextsService.delete(textId);
      });
    };

    self.orderBy = function orderBy(selectedOrder) {
      self.currentOrder = selectedOrder;
    };

    function buildRenameDialog(text) {
      return $mdDialog.prompt()
        .title('Enter new name:')
        .placeholder(text.title)
        .ariaLabel('Text Rename')
        .ok('Ok')
        .cancel('Cancel');
    }

    function buildRemoveModal(text) {
      return $mdDialog.confirm()
        .title('Would you like to delete:')
        .textContent(text.title)
        .ariaLabel('Text Delete')
        .ok('Ok')
        .cancel('Cancel');
    }
  };
});
