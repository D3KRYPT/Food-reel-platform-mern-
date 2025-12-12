const mongoose = require('mongoose');

const foodpartnerSchema = new mongoose.Schema({
    fullName: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }, 
    
}, {
        timestamps: true
    });

const Foodpartner = mongoose.model('foodpartner', foodpartnerSchema);

module.exports = Foodpartner;

