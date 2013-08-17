define(['angular', 'webshop/cart/controller'], function(ng) {
  return ng.module('webshop.cart.ng', ['webshop.cart.controller.ng']).config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/cart', {
        controller: 'CartController',
        templateUrl: 'js/webshop/cart/cart.html'
      })
    }
  ]);

});