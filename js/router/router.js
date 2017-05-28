define([
        'backbone',
        'jquery',
        'underscore',
        'collection',
        'navList'
    ],
    function(Backbone, $, _, townCollection, navList) {
        return Backbone.Router.extend({
            routes: {
                "": "index",
                "boom": "boom"
            },
            initialize: function() {
                console.log('yeah');
            },
            index: function() {

                alert('index');
                // var navigation = new navList({
                // collection: townCollection
                // });
                // $('#navigation').append(navigation.el);
            },
            boom: function() {
                var navigation = new navList({
                    collection: townCollection
                });
                $('#navigation').append(navigation.el);
            }
        })
    })
