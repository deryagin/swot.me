define([
  'common/utility/rest.service'

], function(RestService) {
  'use strict';

  return function TextListService() {

    return new RestService('/text/list');
  }
});

