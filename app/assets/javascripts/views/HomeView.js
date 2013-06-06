define(["jquery","jqui","backbone","text!home.html"], function($, jqui, Backbone, homeTemplate) {
	var HomeView = Backbone.View.extend({

	    initialize:function () {
	        this.template = _.template(homeTemplate);
	        this.render();
	    },

	    render:function (eventName) {
	        this.$el.html(this.template());
	        return this;
	    }
	});

	return HomeView;
});
