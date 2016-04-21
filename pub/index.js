define([
	'config'

], function() {
  'use strict';

  require([
    'module/main/index'
  ], function (main) {
    angular.bootstrap(document, [main.name]);
  });
});
