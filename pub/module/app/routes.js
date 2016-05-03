define([

], function() {
	'use strict';

  return [
    {path: '/', redirectTo: '/texts'},
    {path: '/texts', component: {sidenav: 'sidenav', content: 'texts'}},
    {path: '/words', component: {sidenav: 'sidenav', content: 'words'}},
    {path: '/stats', component: {sidenav: 'sidenav', content: 'stats'}},
    {path: '/import', component: {sidenav: 'sidenav', content: 'import'}},
    {path: '/export', component: {sidenav: 'sidenav', content: 'export'}},
    {path: '/settings', component: {sidenav: 'sidenav', content: 'settings'}},
    {path: '/news', component: {sidenav: 'sidenav', content: 'news'}},
    {path: '/ideas', component: {sidenav: 'sidenav', content: 'ideas'}},
    {path: '/help', component: {sidenav: 'sidenav', content: 'help'}},
    {path: '/about', component: {sidenav: 'sidenav', content: 'about'}}
  ];
});
