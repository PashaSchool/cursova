define(['backbone', 'underscore', 'model', 'db'], function(Backbone, _, model, db) {

	var Collection = Backbone.Collection.extend({
		model: model
	});
	var townCollection = new Collection();
	townCollection.add(db);
	
	return townCollection;
})