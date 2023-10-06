const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
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
app.use(cors());

app.post('/signup', (req, res) => {

  const { fName, lName, user, email, password, experience, selectyourgoals, token } = req.body;

  const insertQuery = 'INSERT INTO user (firstname, lastname, user, email, password, experience, selectyourgoals, token) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [fName, lName, user, email, password, experience, selectyourgoals, token];

  connection.query(insertQuery, values, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    const token = jwt.sign({ user, email }, JWT_SEC, { expiresIn: '1h' });
    res.status(200).json({ message: 'User registered successfully', token });


    console.log('Data inserted successfully');
  });

});




app.listen(5000)