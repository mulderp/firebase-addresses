var Backbone = require("backbone");

var Address = Backbone.Firebase.Model.extend({

  defaults: {
    "name": "empty",
    "email": "empty"
  }

});

module.exports = Address;
