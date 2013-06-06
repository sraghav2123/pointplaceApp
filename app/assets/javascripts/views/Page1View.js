define(["jquery","jqui","backbone","text!page1.html"], function($, jqui, Backbone, page1Template) {
	var Page1View = Backbone.View.extend({

	    initialize:function () {
	        this.template = _.template(page1Template);
	        this.render();
	    },

	    render:function (eventName) {
	        $(this.el).html(this.template());
	        return this;
	    }
	});

	return Page1View;
});