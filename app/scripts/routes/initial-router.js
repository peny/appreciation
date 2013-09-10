/*global define*/

define([
    'jquery',
    'backbone',
    'routes/main-router'
], function ($, Backbone, MainRouter) {
    'use strict';

    var InitialRouter = Backbone.Router.extend({

        initialize: function(){
            new MainRouter();
        },

        routes: {
        },

    });

    return InitialRouter;
});
