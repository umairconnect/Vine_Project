var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vine_project",
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const insertQuery = 'INSERT INTO user (user, email) VALUES (?, ?)';
const values = ['John Doe', 'johndoe@example.com'];

connection.query(insertQuery, values, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully');
  });
