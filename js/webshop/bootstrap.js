// Boot the webshop programmatically (rather than using ng-app on the <html> element)
define(['require', 'angular', 'webshop/app'], function(require, ng) {
  'use strict';

  require(['domReady!'], function(document) {
    /* everything is loaded...go! */
    return ng.bootstrap(document, ['webshop.app.ng']);
  });
});