define([ "jquery","jqui","backbone", "views/HomeView", "views/Page1View", "views/Page2View" , "views/LayoutView"], function( $, jqui, Backbone, HomeView, Page1View, Page2View, LayoutView) {


    var AppRouter = Backbone.Router.extend({

        routes:{
            "":"home",
            "page1":"page1",
            "page2":"page2"
        },

        initialize:function () {
            // Handle back button throughout the application
            // $('.back').live('click', function(event) {
            //     window.history.back();
            //     return false;
            // });
            this.firstPage = true;
            // window.addEventListener("hashchange",function(e){
            //         var url=document.location.hash.replace("#","/");
            //         console.log('in hashchange');
            //     });
            $.ui.customClickHandler=function(arg){ 
                console.log('custom click');
                document.location.href = arg.href;
                return true;
            }
            var jqmobi_layout = new LayoutView();
            $('body').append($(jqmobi_layout.el));
        },

        home:function () {
            console.log('#home');
            
            this.changePage(new HomeView(), '#home', 'up');
        },

        page1:function () {
            console.log('#page1');
            this.changePage(new Page1View(), '#page1', 'up');
        },

        page2:function () {
            console.log('#page2');
            this.changePage(new Page2View(), '#page2','up');
        },

        changePage:function (page, panel_id, transition) {

            $('#content').append($(page.el));
            $.ui.loadContent(panel_id, false, false, transition);
            
            
            // var transition = $.mobile.defaultPageTransition;
            // // We don't want to slide the first page
            // if (this.firstPage) {
            //     transition = 'none';
            //     this.firstPage = false;
            // }
            //$.mobile.changePage($(page.el), {changeHash:false, transition: transition});
        }

    });

    return AppRouter;

});