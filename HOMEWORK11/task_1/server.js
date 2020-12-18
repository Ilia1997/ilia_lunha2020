const http = require("http");
const os = require("os");
const path = require("path");

let userName = os.userInfo().username;
let osVersion = os.type();
let time = os.uptime();

const pathDir = path.dirname("C:/NodeJS/quux");
const baseName = path.basename("C:/NodeJS/status.js");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<h1>Sistem information<h1/>");
    response.write("<h3>Current user name: " + userName + "<h3/>");
    response.write("<h3> OS type: " + osVersion + "<h3/>");
    response.write(
      "<h3>Sistem work time: " + (time / 60).toFixed(2) + " minutes<h3/>"
    );
    response.write("<h3>Current work directory: " + pathDir + "<h3/>");
    response.write("<h3>Server file name: " + baseName + "<h3/>");

    response.end("");
  })
  .listen(5000);
console.log("Server running at http://127.0.0.1:5000/");
