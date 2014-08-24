// Generated by CoffeeScript 1.7.1
(function() {
  (function($, Backbone, Marionette, exports) {
    var BoxModel, BoxToolsRegular, BoxView, DangerView, InfoModel, InfoView, LoadingView, RestorableRegion, SmallBoxModel, SmallBoxView, SuccessView, WarningView, app;
    RestorableRegion = Marionette.Region.extend({
      _cache: null,
      initialize: function() {
        return this._cache = this.$el.html();
      },
      onEmpty: function() {
        return this.$el.html(this._cache);
      }
    });
    InfoModel = Backbone.Model.extend({
      defaults: {
        message: '',
        title: ''
      }
    });
    InfoView = Marionette.ItemView.extend({
      template: '#message-view',
      className: 'alert alert-info',
      data: {},
      initialize: function(args) {
        if (args == null) {
          args = {};
        }
        this.model = new InfoModel(args);
        return this.listenTo(this.model, 'change', this.render);
      }
    });
    DangerView = InfoView.extend({
      className: 'alert alert-danger'
    });
    WarningView = InfoView.extend({
      className: 'alert alert-warning'
    });
    SuccessView = InfoView.extend({
      className: 'alert alert-success'
    });
    LoadingView = InfoView.extend({
      template: '#loading-view'
    });
    SmallBoxModel = Backbone.Model.extend({
      defaults: {
        title: '',
        message: '',
        icon: 'fa fa-exclamation-circle',
        linkText: '',
        color: 'aqua'
      }
    });
    SmallBoxView = Marionette.ItemView.extend({
      template: '#small-box-view',
      className: 'small-box',
      data: {},
      ui: {
        boxLink: '[data-action="box-link"]'
      },
      events: {
        'click [data-action="box-link"]': 'detailClick'
      },
      initialize: function(args) {
        if (args == null) {
          args = {};
        }
        this.model = new SmallBoxModel(args);
        return this.listenTo(this.model, 'change', this.render);
      },
      onRender: function() {
        return this.$el.attr({
          'class': "small-box bg-" + (this.model.get('color'))
        });
      },
      colorize: function(color) {
        this.model.set('color', color);
        return this;
      },
      detailClick: function(event) {
        event.preventDefault();
        return this.trigger('detail:click', this);
      }
    });
    BoxModel = Backbone.Model.extend({
      defaults: {
        title: '',
        message: '',
        icon: 'fa fa-exclamation-circle',
        linkText: '',
        color: 'aqua',
        solid: true
      }
    });
    BoxToolsRegular = Marionette.ItemView.extend({
      template: '#box-tools-regular',
      ui: {
        collapse: '[data-widget="collapse"]',
        remove: '[data-widget="remove"]'
      }
    });
    BoxView = Marionette.LayoutView.extend({
      model: BoxModel,
      className: 'box',
      template: '#box-view',
      initialize: function(args) {
        if (args == null) {
          args = {};
        }
        this.model = new BoxModel(args);
        return this.listenTo(this.model, 'change', this.render);
      },
      onRender: function() {
        var color, solid;
        solid = (this.model.get('solid') ? 'box-solid' : '');
        color = (this.model.get('color') ? "box-" + (this.model.get('color')) : 'box-default');
        return this.$el.attr('class', "box " + solid + " " + color);
      },
      regions: {
        tools: '[data-role="box-tools"]',
        body: '[data-role="body"]',
        footer: '[data-role="footer"]'
      }
    });
    app = new Marionette.Application;
    app.addRegions({
      appTitle: RestorableRegion.extend({
        el: '#avanzu-admin-title'
      }),
      appNavbar: RestorableRegion.extend({
        el: '#avanzu-admin-navbar'
      }),
      appSidebar: RestorableRegion.extend({
        el: '#avanzu-admin-sidebar'
      }),
      appHeader: RestorableRegion.extend({
        el: '#avanzu-admin-content-header'
      }),
      appContent: '#avanzu-admin-content'
    });
    return exports.Avanzu != null ? exports.Avanzu : exports.Avanzu = {
      AdminInstance: app,
      Views: {
        MessageView: InfoView,
        InfoView: InfoView,
        WarningView: WarningView,
        DangerView: DangerView,
        LoadingView: LoadingView,
        SuccessView: SuccessView,
        SmallBoxView: SmallBoxView,
        BoxView: BoxView,
        BoxToolsRegular: BoxToolsRegular
      }
    };
  })(jQuery, Backbone, Backbone.Marionette, window);

}).call(this);
