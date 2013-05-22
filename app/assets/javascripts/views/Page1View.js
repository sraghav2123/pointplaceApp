define(["jquery","backbone","text!page1.html"], function($, Backbone, page1Template) {
	var Page1View = Backbone.View.extend({

	    initialize:function () {
	    	data = {};
	        this.template = _.template(page1Template);
	    },

	    render:function (eventName) {
	        $(this.el).html(this.template());
	        return this;
	    }
	});

	return Page1View;
});