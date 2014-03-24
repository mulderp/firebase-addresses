var Backbone = require("backbone");
var Stickit = require("backbone.stickit");
console.log(Stickit);
var backfire = require("client-backfire");
var $ = require("jquery-untouched");
var _ = require("underscore");

var Address = require("models/address");
var addresses = require("collections/addresses");
var FormView = require("views/form");
var Preview = require("views/preview");
var Controls = require("views/controls");

var address;
$(document).ready(function() {
  console.log("get ready");
  address = new Address();
  var formView = new FormView({ model: address, el: $("#newForm") });
  formView.render();

  var preview = new Preview({model: address, el: $("#preview") });
  preview.render();

  var controls = new Controls({});
});


module.exports = {
  Backbone: backfire.Backbone,
  views: FormView,
  models: function() { return address },
  collections: addresses
}
