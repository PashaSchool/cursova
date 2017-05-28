require.config({
	paths: {
		
		"jquery" : "vendor/jquery/dist/jquery",
		"underscore" : "vendor/underscore/underscore",
		"backbone" : "vendor/backbone/backbone",
		"text" : "vendor/text/text",

		//view
		"view" : "views/view"
	}
});

require(['view', 'jquery'], function(view, $) {
	var e = new view();
	$('body').append(e.render().el);
})