const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/usersModel');
const Location = require('../models/locationsModel');

const router = express.Router();

router.use(express.json());

router.post('/register', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.send("User with email already exist");
        }
        const newUser = new User(req.body);
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        newUser.password = hashedPassword;
        await newUser.save();
        res.send("User Registered Successfully!");
    } catch (err) {
        res.status(400).send("Error registering user");
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).send("No user found with this email");
        }
        // Compare the provided password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).send("Incorrect password");
        }
        res.send(user);
    } catch (err) {
        res.status(400).send("Error logging in");
    }
});

router.post('/user/add_location', async (req, res) => {
    try {
        const location = new Location(req.body);
        await location.save()
        res.send("Location saved to history");
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})

router.get('/user/locations', async (req, res) => {
    try {
        const locations = await Location.find({ userId: req.body.userId })
        if (locations.length < 1) {
            res.send('No previous location history for user')
        }
        res.send(locations)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
});

module.exports = router;
