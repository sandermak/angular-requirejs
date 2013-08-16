define(['angular', 'webshop/common/userservice'], function(ng) {
  return ng.module('webshop.common.controller.ng', ['webshop.common.userservice.ng'])
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