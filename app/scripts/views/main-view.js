/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
], function ($, _, Backbone, JST) {
    'use strict';

    var MainView = Backbone.View.extend({

        el: '.app-container',

        template: JST['app/scripts/templates/main.ejs'],

        events: {
        },

        initialize: function(){
var _this = this;

},

        render: function(){
            var _this = this;
            var context = {
		message: "Hello!123123",
		product: {
			title: "cool"
		}
            };
            var html = _this.template(context);
            _this.$el.html(html);

        }
    });

    return MainView;
});
