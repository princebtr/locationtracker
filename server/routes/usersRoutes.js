const express = require('express');
const User = require('../models/usersModel');

const router = express.Router();

router.use(express.json());

router.post('/register', (req, res) => {
    const newUser = new User(req.body);

    newUser.insertOne()
    .then((result) => {
        res.send("User Registered Successfully!")
    })
    .catch((err) => {
        res.status(400).json({err})
    })
});

router.post('/login', (req, res) => {
    const {email, password} = req.body;

    User.findOne({email: email, password: password})
    .then((user) => {
        if(!user) {
            res.send("No match will the details")
        }
        res.send(user)
    })
    .catch((err) => {
        res.status(400).json({err})
    })
})
