requirejs.config({
	paths: {
		//libs
		"jquery" : "vendor/jquery/dist/jquery",
		"underscore" : "vendor/underscore/underscore",
		"backbone" : "vendor/backbone/backbone",
		"text" : "vendor/text/text",

		//model
		"model" : "model/model",

		//collection
		"collection" : "collection/collection",

		//view
		"navItem" : "views/item_nav",
		"navList" : "views/nav",

		//router
		"router" : "router/router",

		//database
		"db" : "db/db"
	}
});


requirejs(['main']);