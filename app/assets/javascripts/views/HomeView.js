define(["jquery","backbone","text!home.html"], function($, Backbone, homeTemplate) {
	var HomeView = Backbone.View.extend({

	    initialize:function () {
	    	data = {};
	        this.template = _.template(homeTemplate);
	    },

	    render:function (eventName) {
	        $(this.el).html(this.template());
	        return this;
	    }
	});

	return HomeView;
});
