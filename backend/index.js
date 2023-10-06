const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const JWT_SEC = "my_jwt_sec";
const connection = require('./db/config');


app.get("/", (req, resp) => {
    resp.json(
        {
            message: "my json is working",
        }
    )
});
app.use(express.json());
app.post('/signup', (req, res) => {
  //res.send(req.body)

  const { user, email, password, date, token, firstname, lastname, experience, selectyourgoals} = req.body;

  const insertQuery = 'INSERT INTO user (user, email, password, date, token, firstname, lastname, experience, selectyourgoals) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [user, email, password, date, token, firstname, lastname, experience, selectyourgoals];

  connection.query(insertQuery, values, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully');
  });


});




app.listen(5000)