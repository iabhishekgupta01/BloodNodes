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
        enum: ['active', 'fulfilled', 'emergency', ],
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