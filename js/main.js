define(['navList',
    'jquery',
    'collection',
    'router',
    'backbone',
    'underscore'
], function(navList, $, colect, router, Backbone, _) {

	Backbone.history.start();
    var Router = new router();

    
    console.log('Router: ', Router);

})
