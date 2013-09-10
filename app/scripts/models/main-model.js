/*global define*/

define([
    'underscore',
    'backbone',
], function (_, Backbone) {
    'use strict';

    var MainModel = Backbone.Model.extend({
        defaults: {
        }
    });

    return MainModel;
});