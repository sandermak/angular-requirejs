define(['angular', 'webshop/cart/service'], function(ng) {
  ng.module('webshop.cart.controller.ng', ['webshop.cart.service.ng']).controller('CartController', ['$scope', 'cartService',
    function($scope, cartService) {
      $scope.cartItems = cartService.getItems();
    }
  ]);
});