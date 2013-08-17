define(['angular', 'webshop/welcome/module', 'webshop/catalog/module', 'webshop/cart/module', 'webshop/user/module'], function(ng) {
  'use strict';

  var appModule = ng.module('webshop.app.ng', ['webshop.welcome.ng', 'webshop.catalog.ng', 'webshop.cart.ng', 'webshop.user.ng'], [
    '$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.otherwise({redirectTo: '/'});
    }
  ]);

  return appModule;
});