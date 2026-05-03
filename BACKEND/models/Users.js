const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
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
    bloodGroup:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        length:6,
        required:true
    },
});

module.exports=mongoose.model('User',userSchema);
