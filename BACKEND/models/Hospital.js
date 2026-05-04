const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    hospitalName: {
        type: String,
        required: true
    },
    liscenseNumber: {
        type: String,
        required: true,
    },
    contact:{
        email:{
            type:String,
            unique:true,
        },
        phone:{
            type:Number,
            unique:true,
            required:true,
        }
    },
    password:{
        type:String,
        required:true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    address: {
        type: String,
        required: true
    },
    pincode:{
        type:Number,
        length:6,
        required:true   
    },
    inventory: {
        'A+': { type: Number, default: 0 },
        'A-': { type: Number, default: 0 },
        'B+': { type: Number, default: 0 },
        'B-': { type: Number, default: 0 },
        'AB+': { type: Number, default: 0 },
        'AB-': { type: Number, default: 0 },
        'O+': { type: Number, default: 0 },
        'O-': { type: Number, default: 0 }
    },

    lastUpdated: {
        type: Date,
        default: Date.now
    }
    


});

module.exports = mongoose.model('Hospital', hospitalSchema);