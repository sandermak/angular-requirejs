define(['angular', 'webshop/catalog/service'], function(ng) {
  ng.module('webshop.catalog.controller.ng', ['webshop.catalog.service.ng']).controller('CatalogController', ['$scope', 'catalogService',
    function($scope, catalogService) {
      $scope.items = catalogService.getItems();
    }
  ]);
});