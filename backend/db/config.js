const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "sql.freedb.tech",
  user: "freedb_Vine_Project",
  password: "FC@n$m7AKM5zQ37",
  database: "freedb_Vine_Project",
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = connection;
