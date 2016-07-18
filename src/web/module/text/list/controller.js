define([

], function() {
  'use strict';

  return function TextListController($scope, $mdDialog, ServiceFactory) {

    TextListController.$inject = ['$scope', '$mdDialog', 'ServiceFactory'];

    var self = this;

    self.collection = populateCollection();

    self.currentOrder = '+createdAt';

    self.currentToolbar = 'defaultToolbar';

    self.toggleToolbar = function toggleToolbar() {
      self.currentToolbar = ('defaultToolbar' === self.currentToolbar ? 'searchToolbar' : 'defaultToolbar');
    };

    // self.rename = function rename(text) {
    //   var confirmDialog = buildRenameDialog(text);
    //   $mdDialog.show(confirmDialog).then(function (newTitle) {
    //     if (newTitle && newTitle !== text.title) {
    //       text.title = newTitle;
    //       TextItemService.update(text);
    //     }
    //   });
    // };

    // self.remove = function remove(textId) {
    //   var text = TextService.findOne(textId);
    //   var confirmDialog = buildRemoveModal(text);
    //   $mdDialog.show(confirmDialog).then(function () {
    //     TextService.delete(textId);
    //   });
    // };

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
      var TextListService = ServiceFactory.createListService();
      TextListService.read({})
        .then(function succeed(data) {
          self.collection = data;
          $scope.$apply();
        })
        .catch(function failed(err) {
          console.dir(err);
        });
      return [];
      // return TextListService.read({},
      //   function succeed(data) {
      //     self.collection = data;
      //     $scope.$apply();
      //   },
      //   function failed(err) {
      //     console.dir(err);
      //   }
      // );
    }
  };
});
