const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const JWT_SEC = "my_jwt_sec";
import ('./connection');

const insertQuery = 'INSERT INTO users (name, email) VALUES (?, ?)';
const values = ['John Doe', 'johndoe@example.com'];

// app.get("/", (req, resp) => {
//     resp.json(
//         {
//             message: "my json is working",
//         }
//     )
// });

connection.query(insertQuery, values, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully');
  });

// app.post('/signin', (req, res) => {
//     debugger
//     const { username, password } = req.body;

//     if (username === 'user' && password === 'password') {
//         const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
//         res.json({ token });
//     } else {
//         res.status(401).json({ error: 'Invalid credentials' });
//     }
// });

app.listen(5000)