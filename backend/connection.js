const connection = require('./db/config');

connection.query(insertQuery, values, (err, results) => {
  if (err) {
    console.error('Error inserting data:', err);
    return;
  }
  console.log('Data inserted successfully');
});

app.post('/signup', (req, res) => {

  const { username, email, password } = req.body;

  const insertQuery = 'INSERT INTO user (user, email) VALUES (?, ?)';
  const values = [username, email, password];

  connection.query(insertQuery, values, (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully');
  });


});