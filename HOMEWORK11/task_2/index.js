const http = require("http");
const os = require("os");
const pm = require("./personalmodule");
let userName = os.userInfo().username;

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<h3>Date of request : " + pm.getDate() + "<h3/>");
    response.write("<h3>" + pm.getGreeting() + " " + userName + "<h3/>");

    response.end("");
  })
  .listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
