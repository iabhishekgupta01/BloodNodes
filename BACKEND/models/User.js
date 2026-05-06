const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        phone: {
            type: String,
            unique: true,
            required: true,
        },
    },
    status: {
        type: String,
        enum: ['available', 'unavailable','donated', 'requested'],
        default: 'available'
    },
    password: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pincode: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('User', userSchema);
