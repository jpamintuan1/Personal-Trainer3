/* /models/user.js */
 
// Require all the stuff 
var Sequelize = require('sequelize'),
    passportLocalSequelize = require('passport-local-sequelize');
 
// Setup sequelize db connection 
var mydb = new Sequelize('mydb', 'myuser', 'mypass', {
    dialect: 'sqlite',
 
    storage: 'mydb.sqlite'
});
 
// A helper to define the User model with username, password fields 
var User = passportLocalSequelize.defineUser(mydb, {
    favoriteColor: Sequelize.STRING
});
 
// --- OR --- 
 
// Define a User yourself and use attachToUser 
 
var User = mydb.define('User', {
    nick: Sequelize.STRING,
    myhash: Sequelize.STRING,
    mysalt: Sequelize.STRING
});
 
passportLocalSequelize.attachToUser(User, {
    usernameField: 'nick',
    hashField: 'myhash',
    saltField: 'mysalt'
});
 
module.exports = User;