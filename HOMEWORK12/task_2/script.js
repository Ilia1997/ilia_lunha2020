const http = require("http");
var url = require("url");
var static = require("node-static");
var file = new static.Server(".");

function accept(req, res) {
  if (req.url == "/books.js") {
    file.serve(req, res); // can set delay
  } else {
    file.serve(req, res);
  }
}
// ------ run server -------
http.createServer(accept).listen(8080);
console.log("Server running on port 8080");
