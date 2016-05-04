define([
  'module/words/controller',
  'css!module/words/styles.css'

], function(WordsController) {
  'use strict';

  var module = angular.module('swot.words', []);
  module.controller('WordsController', WordsController);
  return module;
});
