define([

], function() {
  'use strict';

  return function TextListController($scope, $mdDialog, TextService) {

    TextListController.$inject = ['$scope', '$mdDialog', 'TextService'];

    var self = this;

    self.collection = populateCollection();

    self.currentOrder = '+createdAt';

    self.currentToolbar = 'defaultToolbar';

    self.toggleToolbar = function toggleToolbar() {
      self.currentToolbar = ('defaultToolbar' === self.currentToolbar ? 'searchToolbar' : 'defaultToolbar');
    };

    self.rename = function rename(textId) {
      var text = TextService.findOne(textId);
      var confirmDialog = buildRenameDialog(text);
      $mdDialog.show(confirmDialog).then(function (newTitle) {
        if (newTitle && newTitle !== text.title) {
          TextService.update({ id: textId, title: newTitle});
        }
      });
    };

    self.remove = function remove(textId) {
      var text = TextService.findOne(textId);
      var confirmDialog = buildRemoveModal(text);
      $mdDialog.show(confirmDialog).then(function () {
        TextService.delete(textId);
      });
    };

    self.sortBy = function orderBy(selectedOrder) {
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

    function populateCollection() {
      return TextService.list({},
        function succeed(data) {
          self.collection = data;
          $scope.$apply();
        },
        function failed(err) {
          console.dir(err);
        }
      );
    }
  };
});
