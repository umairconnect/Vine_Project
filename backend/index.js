const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
const JWT_SEC = "my_jwt_sec";
const connection = require('./db/config');
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 5001;


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

  // Check if the email already exists
  const checkEmailQuery = 'SELECT * FROM user WHERE email = ?';
  connection.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.status(500).json({ error: 'Error checking email' });
    }

    if (results.length > 0) {
      // Email already exists, throw an error
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Email does not exist, continue with user registration
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Error hashing password:', err);
        return res.status(500).json({ error: 'Error hashing password' });
      }

      const insertQuery = 'INSERT INTO user (firstname, lastname, user, email, password, experience, selectyourgoals, token) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
      const values = [fName, lName, user, email, hashedPassword, experience, selectyourgoals, token];

      connection.query(insertQuery, values, (err, results) => {
        if (err) {
          console.error('Error inserting data:', err);
          return res.status(500).json({ error: 'Error inserting data' });
        }

        // const token = jwt.sign({ user, email }, JWT_SEC, { expiresIn: '1h' });
        res.status(200).json({ message: 'User registered successfully', token, values });

        console.log('Data inserted successfully');
      });
    });
  });
});


app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const selectQuery = 'SELECT * FROM user WHERE email = ?';
  connection.query(selectQuery, [email], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).json({ error: 'Error querying database' });
    }
    debugger
    

    if (results.length === 0) {
      return res.status(401).json({ error: 'User not found' });
    }

    const user = results[0];

    // Compare the provided password with the hashed password from the database
    bcrypt.compare(password, user.password, (bcryptErr, result) => {
      if (bcryptErr) {
        console.error('Error comparing passwords:', bcryptErr);
        return res.status(500).json({ error: 'Error comparing passwords' });
      }

      if (result) {
        // Passwords match, generate a JWT token and send it as a response
        const token = jwt.sign({ email: user.email }, JWT_SEC, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
      } else {
        // Passwords do not match
        res.status(402).json({ error: 'Invalid password' });
      }
    });
  });
});

app.listen(PORT)