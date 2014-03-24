var Backbone = require("backbone");

var Address = Backbone.Firebase.Model.extend({

  firebase: "https://addresses-demo.firebaseio.com/addresses",

  defaults: {
    "name": "empty",
    "email": "empty"
  }

});

module.exports = Address;
