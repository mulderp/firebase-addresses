
var backfire = require("client-backfire");
var Backbone = backfire.Backbone;

var Addresses = Backbone.Firebase.Collection.extend({
  firebase: "https://addresses-demo.firebaseio.com/addresses"
});

var addresses = new Addresses();

module.exports = addresses


