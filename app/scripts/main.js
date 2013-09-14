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
	TT.native.init()
    .done(function() {
        TT.api.get('v1/me')
        .done(function(store){
            GLOBAL.router = new Router();
            GLOBAL.storeId = store.id;
            GLOBAL.storeDashboardUrl = store.dashboard_url;
            Backbone.history.start();
            GLOBAL.router.navigate('#',{trigger: true});
            GLOBAL.accessToken = TT.api.accessToken;
        }).fail(console.error('TT broke!'));
    }).fail(console.error('TT broke!'));

});
