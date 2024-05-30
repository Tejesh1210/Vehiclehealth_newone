// models/Registration.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
    name: { type: String, required: true },
    registrationNo: { type: String, required: true },
    chasisNo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Registration', RegistrationSchema);
