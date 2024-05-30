// routes/api.js
const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// Route to handle registration
router.post('/register', async (req, res) => {
    const { name, registrationNo, chasisNo, email, password } = req.body;

    try {
        const newRegistration = new Registration({
            name,
            registrationNo,
            chasisNo,
            email,
            password
        });

        await newRegistration.save();
        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Route to get status
router.get('/status', async (req, res) => {
    try {
        const registrations = await Registration.find({});
        res.status(200).json(registrations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
