define(["jquery","backbone", "routers/approuter"], function($, Backbone, AppRouter) {
		
		console.log("router loaded pointplace loading..");

		var Pointplace = {
		  Models: {},
		  Collections: {},
		  Views: {},
		  Routers: {},
		  initialize: function() {
		    alert('Hello from Backbone!');
		      new AppRouter();
		      Backbone.history.start();	
		  }
		};

		return Pointplace;
	}
);

