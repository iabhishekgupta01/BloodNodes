const mongoose = require('mongoose');

const donationCampSchema = new mongoose.Schema({
    campName: {
        type: String,
        required: true
    },
    location: {
        address: {
            type: String,
            required: true},
        city: {
            type: String,},
        state: {
            type: String,},
        pincode: {
            type: Number,
            length: 6,
            required: true
        },

    },
    date: {
        type: Date,
        required: true},
    time: {
        type: String,
        required: true
    },
    organizer: {
        type: String,
        enum: ['Hospital', 'NGO', 'Community Group'],
        required: true
    },
    organizerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: {
            type: String,
            enum: ['Hospital', 'NGO', 'User'],
        },
    },

    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('DonationCamp', donationCampSchema);