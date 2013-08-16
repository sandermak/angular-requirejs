define(['angular', 'webshop/welcome/controller'], function(ng) {
  return ng.module('webshop.welcome.ng', ['webshop.welcome.controller.ng']).config([
  '$routeProvider',
  function($routeProvider) { 
    $routeProvider.when('/', {
    controller: 'WelcomeController',
    templateUrl: 'js/webshop/welcome/welcome.html'
  })}]); //  will this work when registering other routes later? .otherwise({redirectTo: '/'});

});