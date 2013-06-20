define(["jquery","jqui","backbone", "routers/approuter"], function($,jqui, Backbone, AppRouter) {
		
		console.log("router loaded pointplace loading..");

		var Pointplace = {
		  Models: {},
		  Collections: {},
		  Views: {},
		  Routers: {},
		  initialize: function() {

			$( document ).ready(function() {
					  	// var webRoot = "./";
			            // $.ui.autoLaunch = false; //By default, it is set to true and you're app will run right away.  We set it to false to show a splashscreen
			            // This function runs when the body is loaded.

				
				// Underscore.js Template Settings
				_.templateSettings = {
					interpolate: /\{\{\=(.+?)\}\}/g,
					evaluate: /\{\{(.+?)\}\}/g
				};        
			            
			    console.log( "ready!" );

			    $.ui.backButtonText = "Back";
			    $.ui.autoBoot();

			    new AppRouter();
			    Backbone.history.start();
			});
		  }
		};

		return Pointplace;
	}
);

