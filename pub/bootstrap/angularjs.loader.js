define([

], function() {
  'use strict';

  return {
    registerModules: function(mainModule, requires) {
      var moduleArray = Array.prototype.slice.call(requires);
      Array.prototype.forEach.call(moduleArray, function (module) {
        mainModule.requires.push(module.name);
      });
    },

    configApplication: function(mainModule) {
      mainModule.config(['$locationProvider', function ($locationProvider) {
        $locationProvider.hashPrefix('!');
      }]);
    }
  };
});
