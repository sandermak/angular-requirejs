define(['angular'], function(ng) {
  return ng.module('webshop.catalog.service.ng', []).service('catalogService',
    function() {
      var catalogService = {}
      catalogService.getItems = function() {
        // normally you'd use $http or $resource
        return [{
          id: "1",
          name: "product a"
        }, {
          id: "2",
          name: "product b"
        }]

      }

      return catalogService;
    }
  );
});