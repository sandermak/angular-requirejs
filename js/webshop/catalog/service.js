define(['angular'], function(ng) {
  return ng.module('webshop.catalog.service.ng', [])
    .value('ItemModel', function(id, name) { this.id = id; this.name = name })
    .service('catalogService', ['ItemModel',
      function(ItemModel) {
        var catalogService = {}
        var items = [new ItemModel("1","widget a")
          , new ItemModel("2", "widget b")]
        
        catalogService.getItems = function() {
          // normally you'd use $http or $resource
          return items;
        }

        catalogService.getItem = function(id) {
          angular.forEach(items, function(item) {
            if(item.id === id)
              return item;
          });
        }

        return catalogService;
    }]);
    
});