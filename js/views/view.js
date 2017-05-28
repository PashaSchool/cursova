define(['backbone', 'underscore', 'text!tmpl/t.html'], function(Backbone, _, templ) {
	var view = Backbone.View.extend({
		template: _.template(templ),
		initialize: function() {
		},
		render: function() {
			this.$el.html(this.template({
				name: '____'
			}));
			return this
		}
	});

	return view;
})