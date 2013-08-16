'use strict'

require
    .config({
        paths: {
            'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.1.5/angular.min',
            'domReady': './vendor/requirejs/require-domready'
        },

        shim: {
            'angular': {
                exports: 'angular'
            }
        }
    });

require(['webshop/bootstrap'], function() {
    // nothing to do here...see app.bootstrap.js
});