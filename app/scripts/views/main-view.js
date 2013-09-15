/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'file-input'
], function ($, _, Backbone, JST) {
        'use strict';

        var MainView = Backbone.View.extend({

            el: '.app-container',

            template: JST['app/scripts/templates/main.ejs'],

            events: {
                'click .remove': 'removeImage'
            },

            initialize: function(){
                var _this = this;
                _this.appStart();
            },

            removeImage: function() {
              var imageUpload = $('#imageUpload');
              imageUpload.replaceWith(imageUpload = imageUpload.clone(true));
              $('.well').remove();

            },

            appStart: function(){
              var _this = this;

            },

            getStoreId: function(store){
              var _this = this;
              _this.storeId = store.id;
            },

            genericError: function(r,e,s){
              console.log('genericError: ', r,e,s);
            },

            render: function(){
              var _this = this;

              var context = {
                title: 'Appreciate',
                accessToken: TT.api.accessToken,
                storeid: GLOBAL.storeId,
                storedashboardurl: GLOBAL.storeDashboardUrl
              };
              console.log(_this.storeId);

              var html = _this.template(context);
              _this.$el.html(html);
              _this.$el.find('#imageUpload').bootstrapFileInput();
            }
        });

        return MainView;
});
