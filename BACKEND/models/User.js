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
        enum: ['available', 'unavailable','requested', 'donating'],
        default: 'available'
    },
    acceptedRequests: [{
        type: mongoose.Schema.Types.ObjectId, // Fixed this line
        ref: 'BloodRequest'
    }],
    rejectedRequests: [{
        type: mongoose.Schema.Types.ObjectId, // Fixed this line
        ref: 'BloodRequest'
    }],
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
