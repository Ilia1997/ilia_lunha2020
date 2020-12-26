const http = require("http");
var url = require("url");
var static = require("node-static");
var file = new static.Server(".");

http
  .createServer(function (req, res) {
    file.serve(req, res);
  })
  .listen(8080);

// ------ run server -------

console.log("Server running on port 8080");
