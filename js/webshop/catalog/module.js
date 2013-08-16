define(['angular', 'webshop/catalog/controller'], function(ng) {
  return ng.module('webshop.catalog.ng', ['webshop.catalog.controller.ng']).config([
  '$routeProvider',
  function($routeProvider) { 
    $routeProvider.when('/catalog', {
    controller: 'CatalogController',
    templateUrl: 'js/webshop/catalog/catalog.html'
  })}]); //  will this work when registering other routes later? .otherwise({redirectTo: '/'});

});