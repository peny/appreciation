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
                TT.native.init()
                .done(_this.appStart)
                .fail(_this.genericError);

            },

            appStart: function(store){
                var _this = this;
            },

            fetchStoreProducts: function(products){
                var _this = this;
                console.log('products',products);
            },

            genericError: function(r,e,s){
                console.log('genericERRROR: ', r,e,s);
            },

            render: function(){
                var _this = this;
                var context = {
                    message: 'Hello!123123',
                    product: {
                        title: 'cool'
                    }
                };
                var html = _this.template(context);
                _this.$el.html(html);
            }
        });

        return MainView;
    });
