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

app.post("/login", (req, resp) => {
    const user = {
        id: 1, 
        username: "umair",
        email: "abc@test.com",
    }
    jwt.sign({user}, JWT_SEC, {expiresIn: '300s'}, (err, token) => {
        resp.json({
            token
        })
    })

})

app.listen(5000)