  // *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Info = require("../models/info.js");
var register = require("../models/register.js");

var bcrypt = require('bcrypt');
const saltRounds = 10;


// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.post("/api/login", function(req, res) {
console.log('in /api/:login', req.body.Email);
    // If the user provides a specific character in the URL...
    if (req.body.Email) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      register.findOne({
        where: {
          email: req.body.Email
        }
      }).then(function(result) {
        return res.json(result);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      register.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

    // res.send('password sucessful');

  });

  // If a user sends data to add a new character...
 // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var info = req.body;
    console.log('info', info)

    // Create a routeName
     var routeName = info.Username.replace(/\s+/g, "").toLowerCase();
     var  myPlaintextPassword = info.Password;
    // Then add the character to the database using sequelize
   bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  // Store hash in your password DB.

  // Store hash in database

    register.create({
    
      username: info.Username,
      email: info.Email,
      password: hash
      // phone: info.phone,
      // position: info.position,
      // company: info.company,
      // message: info.message
    });
    
 // Load hash from your password DB.
bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    // res == true
});
//bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
    // res == false
});




    res.send('inserted a record');

  });
};


