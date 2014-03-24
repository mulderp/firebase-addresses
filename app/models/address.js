var Backbone = require("backbone");

var Address = Backbone.Model.extend({

  defaults: {
    "name": "empty",
    "email": "empty"
  }

});

module.exports = Address;
