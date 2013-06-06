define(["jquery","jqui","backbone","text!layout.html"], function($, jqui, Backbone, layoutTemplate) {
	var LayoutView = Backbone.View.extend({
		el: '#jQUi', 

	    initialize:function () {
	        this.template = _.template(layoutTemplate);
	        this.render();
	    },

	    render:function (eventName) {
	        this.$el.html(this.template());
	        return this;
	    }
	});

	return LayoutView;
});
