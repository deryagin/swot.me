define([

], function() {
	'use strict';

  return [
    {path: '/', redirectTo: '/texts'},
    {path: '/texts', component: {sidenav: 'sidenav', content: 'texts'}},
    {path: '/words', component: {sidenav: 'sidenav', content: 'words'}}
  ];
});
