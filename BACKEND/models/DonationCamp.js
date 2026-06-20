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
        enum: ['Hospital', 'NGO', 'User'],
        required: true
    },
    organizerId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'organizer'
    },
    image: {
        type: String,
        default: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop'
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