define(['angular', 'webshop/welcome/module', 'webshop/catalog/module'], function(ng) {
  'use strict';

  var appModule = ng.module('webshop.app.ng', ['webshop.welcome.ng', 'webshop.catalog.ng'], [
    '$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.otherwise({redirectTo: '/'});
    }
  ]);

  return appModule;
});