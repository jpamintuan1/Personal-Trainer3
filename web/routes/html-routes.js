// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var express = require("express");
var app     = express();
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    console.log('trying to serve index, __dirname is', __dirname);
    res.sendFile(path.join(__dirname, "../index.html"));
  console.log("test");
  });

  // add route loads the add.html page,
  // where users can enter new characters to the db
 app.get("/typo.html", function(req, res) {
    console.log('trying to serve index, __dirname is', __dirname);
    res.sendFile(path.join(__dirname, "../typo.html"));
  console.log("test");
  });

  app.get("/index.html", function(req, res) {
    console.log('trying to serve index, __dirname is', __dirname);
    res.sendFile(path.join(__dirname, "../index.html"));
  console.log("test");
  });  

app.get("/signup.html", function(req, res) {
    console.log('trying to serve index, __dirname is', __dirname);
    res.sendFile(path.join(__dirname, "../signup.html"));
  console.log("test");
  });  

app.get("/contact.html", function(req, res) {
    console.log('trying to serve index, __dirname is', __dirname);
    res.sendFile(path.join(__dirname, "../contact.html"));
  console.log("test");
  

  });


  

};
