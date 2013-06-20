 define(["jquery","jqui","backbone","text!login.html", "models/user"], function($, jqui, Backbone, loginTemplate, User) {

    loginView = Backbone.View.extend({

      events: { 'submit form':   'authorize' },

      authorize: function () {
        if (this.submitButton.hasClass('disabled') && !(this.form.data('user-authorized') === true)) {
          return false;
        } else {
          this.submitButton.addClass('disabled');
        }

        var self = this,
            attrs = {
              email: this.emailField.val(),
              password: this.passwordField.val()
            };
        User.authorize(attrs, function (err, user) {
          if (err) { self.loginFailure(); }
          else { self.loginSuccess(user); }
        });
        return (this.form.data('user-authorized') === true);
      },

      loginSuccess: function (user) {
        console.log('user-authorized');
        this.form.data('user-authorized', true);
        this.form.submit();
      },

      loginFailure: function () {
        
        console.log('login failed');
        this.$el.animate({left: '-=20'}, 100);
        this.$el.animate({left: '+=40'}, 100);
        this.$el.animate({left: '-=40'}, 100);
        this.$el.animate({left: '+=40'}, 100);
        this.$el.animate({left: '-=20'}, 100);
        this.emailField.focus();
        this.submitButton.removeClass('disabled');
      },

      initialize: function () {
        this.template = _.template(loginTemplate);
          this.render();
        this.form = this.$el.find('form');
        this.emailField = this.$el.find('input[name=email]');
        this.passwordField = this.$el.find('input[name=password]');
        this.submitButton = this.$el.find('input[type=submit]');
      },

      render:function (eventName) {
          this.$el.html(this.template());
          return this;
      }

    });

  return loginView;
});