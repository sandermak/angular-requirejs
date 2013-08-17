define(['angular', 'webshop/user/service'], function(ng) {
  return ng.module('webshop.user.controller.ng', ['webshop.user.service.ng'])
    .controller('LoggedInController', ['$scope', 'userService',
      function($scope, userService) {

        $scope.$watch(function() {
          return userService.getLoggedInUser()
        }, function(loggedInUser) {
          $scope.loggedInUser = loggedInUser;
        })

        $scope.logout = function() {
          userService.logout();
        }
        $scope.login = function(username) {
          userService.login(username);
        }
      }
    ]);
});