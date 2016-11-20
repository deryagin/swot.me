define([

], function() {
  'use strict';

  return function DialogFactory($mdDialog) {

    DialogFactory.$inject = ['$mdDialog'];

    var self = this;

    self.showRenameDialog = function showRenameDialog(text) {
      var dialog = $mdDialog.prompt()
        .title('Enter new name:')
        .placeholder(text.title)
        .cancel('Cancel')
        .ok('Ok');
      return $mdDialog.show(dialog);
    };

    self.showRemoveDialog = function showRemoveDialog(text) {
      var dialog = $mdDialog.confirm()
        .title('Would you like to delete:')
        .textContent(text.title)
        .cancel('Cancel')
        .ok('Ok');
      return $mdDialog.show(dialog);
    };
  }
});
