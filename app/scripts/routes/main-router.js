/*global define*/

define([
    'jquery',
    'backbone',
    'views/main-view'
], function ($, Backbone, MainView) {
    'use strict';

    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'showMain',
            '/': 'showMain',
        },

        showMain: function(){
console.log('router sow main');
            var _this = this;
            _this.renderBase().
            renderMain();
            return _this;
        },

        renderBase: function(){
            var _this = this;
            return _this;
        },

        renderMain: function(){
            var _this = this;

            var mainView = new MainView();

            mainView.render();

            return _this;
        }

    });

    return MainRouter;
});
