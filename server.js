// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware
app.use(bodyParser.json());

// Database connection
const dbURI = "mongodb+srv://temp:temp@cluster0.vpzsw7e.mongodb.net/"; // Replace with your MongoDB connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

// Routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
