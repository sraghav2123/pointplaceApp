define(["jquery","backbone","text!page2.html"], function($, Backbone, page2Template) {
	var Page2View = Backbone.View.extend({

	    initialize:function () {
	    	data = {};
	        this.template = _.template(page2Template);
	    },

	    render:function (eventName) {
	        $(this.el).html(this.template());
	        return this;
	    }
	});

	return Page2View;
});