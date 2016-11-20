define([

], function() {
  'use strict';

  return function TextListController($scope, TextServices, TextListDialogs) {

    TextListController.$inject = ['$scope', 'TextServices', 'TextListDialogs'];

    var self = this;

    self.collection = populate();

    self.currentOrder = '+createdAt';

    self.currentToolbar = 'defaultToolbar';

    self.rename = function rename(text) {
      TextListDialogs.showRenameDialog(text)
        .then(function onConfirmed(newTitle) {
          if (newTitle && newTitle !== text.title) {
            var props = {id: text.id, title: newTitle};
            return TextServices.createItemService().update(props);
          }
        })
        .then(function onUpdated(data) {
          text.title = data.title;
          text.accessedAt = data.accessedAt;
        });
    };

    self.delete = function deleteIt(text) {
      TextListDialogs.showRemoveDialog(text)
        .then(function onConfirmed() {
          var props = {id: text.id};
          return TextServices.createItemService().delete(props);
        })
        .then(function onDeleted() {
          var index = self.collection.indexOf(text);
          if (-1 < index) {
            self.collection.splice(index, 1);
          }
        });
    };

    self.sortBy = function orderBy(selectedOrder) {
      self.currentOrder = selectedOrder;
    };

    self.toggleToolbar = function toggleToolbar() {
      self.currentToolbar = ('defaultToolbar' === self.currentToolbar ? 'searchToolbar' : 'defaultToolbar');
    };

    function populate() {
      TextServices.createListService().read()
        .then(function onSucceed(textCollection) {
          self.collection = textCollection;
          $scope.$apply();
        })
        .catch(function onFailed(err) {
          console.dir(err);
        });
      return [];
    }
  };
});
