define(['angular'], function(ng) {
  return ng.module('webshop.user.service.ng', []).service('userService',
    function() {
      var userService = {}
      var loggedInUser = null;

      userService.login = function(username) { loggedInUser = username; }
      userService.logout = function() { loggedInUser = null; }
      userService.getLoggedInUser = function() { return loggedInUser; }

      return userService;
    }
  );
});