var Backbone = require("backbone");
var Stickit = require("backbone.stickit");

var addresses = require("collections/addresses");

var NewAddress = Backbone.View.extend({

  bindings: {
     '#name': 'name',
     '#email': 'email',
  },
 
  events: {
    "submit #address": "saveModel"
  },
 
  saveModel: function(ev) {
    ev.preventDefault();
    addresses.add(this.model);
  },
 
  render: function() {
    this.$el.html('<div id="newAddress"/> \
    <h2 id="stacked-form" class="content-subhead">New Address<a href="#stacked-form" class="content-link"></a></h2> \
    <form id="address" class="pure-form pure-form-stacked"> <fieldset> \
    <label for="name">Name</label><input id="name" name="name" type="text"> \
    <label for="email">Email</label><input id="email" name="email" type="text"> \
    <input id="submit" type="submit"></input> \
    </fieldset> </form> \
    ');
    this.stickit();
    return this;
  }
 

});

module.exports = NewAddress;
