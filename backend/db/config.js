const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "185.61.152.65",
  user: "nodepzok_vine_api",
  password: "nodepzok_vine_api",
  database: "nodepzok_vine_api",
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = connection;
