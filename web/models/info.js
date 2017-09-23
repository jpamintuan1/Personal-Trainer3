
// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var register = sequelize.define("register", {
  // the routeName gets saved as a string
  username: Sequelize.STRING,
 
  // the character's role (a string)
  email: Sequelize.STRING,
  // the character's age (a string)
  password: Sequelize.STRING,
  // and the character's force points (an int)


  



}, {
  timestamps: false
});

// Syncs with DB
register.sync();

// Login available for other files (will also create a table)
module.exports = register;
