define([

], function() {
  'use strict';

  return {
    addRequires: function(mainModule, requires) {
      var moduleArray = Array.prototype.slice.call(requires);
      Array.prototype.forEach.call(moduleArray, function (module) {
        mainModule.requires.push(module.name);
      });
    }
  }
});
