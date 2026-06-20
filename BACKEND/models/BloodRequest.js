const mongoose = require('mongoose');

const bloodRequestSchema = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    },
    bloodGroup: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop'
    },
    unitsNeeded: {
        type: Number,
        required: true,
    },
    unitsFulfilled: {
        type: Number,
        default: 0,
    },
    status: {
        type: String,
        enum: ['active', 'fulfilled', 'emergency', 'closed'],
        default: 'active',
    },

    acceptedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
});
module.exports = mongoose.model('BloodRequest', bloodRequestSchema);