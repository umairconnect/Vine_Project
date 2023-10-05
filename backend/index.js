const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
const JWT_SEC = "my_jwt_sec";

app.get("/", (req, resp) => {
    resp.json(
        {
            message: "my json is working",
        }
    )
});


app.post('/signin', (req, res) => {
    const { username, password } = req.body;

    if (username === 'user' && password === 'password') {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.listen(5000)