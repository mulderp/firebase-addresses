global.window = global;
global.Backbone = require("./app/main");
var repl = require("repl").start({ useGlobal: true, ignoreUndefined: false })
