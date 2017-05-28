define(['backbone',
        'underscore',
        'jquery',
        'model',
        'navItem'
    ],
    function(Backbone, _, $,model, navItem) {

        return Backbone.View.extend({
            tagName: 'ul',
            className: 'nav nav-tabs',
            initialize: function(option) {
                this.render();

            },
            render: function() {
                var data = [];
                this.collection.each(function(model) {
                    var itemNav = new navItem({model: model});
                    data.push(itemNav.render().el);
                });
                this.$el.append(data);
                return this;
            }

        });
    });
