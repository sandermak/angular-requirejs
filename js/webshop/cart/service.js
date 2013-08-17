define(['angular'], function(ng) {
  return ng.module('webshop.cart.service.ng', []).service('cartService',
    function() {
      var cartService = {}
      cartService.getItems = function() {
        // normally you'd use $http or $resource
        return [{
          id: "1",
          name: "product a"
        }, {
          id: "2",
          name: "product b"
        }]

      }

      return cartService;
    }
  );
});