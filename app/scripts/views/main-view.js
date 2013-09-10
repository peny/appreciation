/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var MainView = Backbone.View.extend({

        el: '.main-content',

        template: JST['app/scripts/templates/main.ejs'],

        events: {
        },

        initialize: function(){
        },

        render: function(){
            var _this = this;
            var context = {
            };
            var html = _this.template(context);
            _this.$el.html(html);
        }
    });

    return MainView;
});
