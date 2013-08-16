define(['angular'], function(ng) {
  ng.module('webshop.welcome.controller.ng', []).controller('WelcomeController', ['$scope',
    function($scope) {
      $scope.nrItemsSold = 20;
    }
  ]);
});