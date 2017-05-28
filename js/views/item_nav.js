define([
    'backbone',
    'underscore',
    'jquery',
    'text!template/item_nav.html'
], function(Backbone, _, $, itemNav) {
	return Backbone.View.extend({
		tagName: "li",
		template: _.template(itemNav),
		initialize: function() {
		},
		events: {
			'click a' : "test"
		},
		test: function() {
			alert('ye');
		},
		render: function() {
			this.$el.attr('role', 'presentation')
			this.$el.append(this.template(this.model.toJSON()));
			return this;
		}
	})
});
