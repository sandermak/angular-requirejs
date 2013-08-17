define(['angular', 'webshop/user/controller', 'webshop/user/service'], function(ng) {
  return ng.module('webshop.user.ng', ['webshop.user.controller.ng', 'webshop.user.service.ng']);
});