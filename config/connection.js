// Set up MySQL connection.
var mysql = require("mysql");
var connection;
var connection = mysql.createConnection({
  port: 3306,
  host: "icopoghru9oezxh8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "bn8ox9uuyaex70q5",
  password: "kz89vgp5jpdsvdi0",
  database: "cclvag3hxfhlceba"
});
// if(process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL)
// } else connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'hacktheplanet'
//   database: 'todoagain_db'
// })
// Make connection.
// var mysql = require('mysql');
// var connection = mysql.createConnection(process.env.JAWSDB_URL);



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
