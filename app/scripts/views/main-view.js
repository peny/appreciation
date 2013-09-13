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
	function appStart(store) {
  TT.api.get('v1/me').done(_this.fetchStoreProducts).fail(genericError);
}
	
        },

	fetchStoreProducts: function(store){
  TT.api.get('v1/stores/' + store.id + '/products')
    .done(
	function(products){
	console.log(products);
}
)
    .fail(genericError);

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
