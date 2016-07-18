define([
  'common/utility/rest.service'

], function(RestService) {
  'use strict';

  return function TextItemService() {

    return new RestService('/text');
  }
});
