/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone-amd/backbone',
        underscore: '../bower_components/underscore-amd/underscore',
        bootstrap: 'vendor/bootstrap'
    }
});

require([
    'backbone',
    'routes/initial-router'
], function (Backbone, Router) {
    window.EmptyNS = {};
    window.EmptyNS.Router = new Router();
    Backbone.history.start();
	function appStart(store) {
	  TT.api.get('v1/me').done(fetchStoreProducts).fail(genericError);
	}

	function fetchStoreProducts(store) {
	  TT.api.get('v1/stores/' + store.id + '/products')
	    .done(listProductImages)
	    .fail(genericError);
	}

});
