define(["jquery", "jqui" ,"backbone", "routers/approuter"], function($, jqui, Backbone, AppRouter) {
		
		console.log("router loaded pointplace loading..");

		var Pointplace = {
		  Models: {},
		  Collections: {},
		  Views: {},
		  Routers: {},
		  initialize: function() {
		      new AppRouter();
		      Backbone.history.start();	
		  }
		};

		return Pointplace;
	}
);

