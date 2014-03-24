var Backbone = require("backbone");
var Stickit = require("backbone.stickit");

var Preview = Backbone.View.extend({

  bindings: {
     '.name': 'name'
  },

  render: function() {
    this.$el.html('<div class="preview name"></div>');
    this.stickit();
    return this;
  }

});

module.exports = Preview;
