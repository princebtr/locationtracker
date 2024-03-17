const mongoose = require('mongoose')

const locationsSchema = mongoose.Schema({
    userId: { type: String, required: true },
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    address: { type: String, required: true }
}, {
    timestamps: true
});

const locationsModel = mongoose.model('location', locationsSchema);


module.exports = locationsModel;