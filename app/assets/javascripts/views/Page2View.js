define(["jquery","jqui","backbone","text!page2.html"], function($, jqui, Backbone, page2Template) {
	var Page2View = Backbone.View.extend({

	    initialize:function () {
	        this.template = _.template(page2Template);
	        this.render();
	    },

	    render:function (eventName) {
	        $(this.el).html(this.template());
	        return this;
	    }
	});

	return Page2View;
});