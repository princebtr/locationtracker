const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    timestamps: true
});

const usersModel = mongoose.model('user', usersSchema);

module.exports = usersModel