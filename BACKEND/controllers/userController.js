
const User=require('../models/User.js');

module.exports.getAllUsers=async(req,res)=>{
    try{
        const users=await User.find({});    
        if(users.length===0){
            return res.status(404).json({message:"No users found"});
        }
        return res.status(200).json(users);
    }   
    catch(err){
        console.error(err);
        res.status(500).json({message:"Internal server error :",error:err.message});
    }   
};

module.exports.getUserById=async(req,res)=>{
    try{
        const {id}=req.params;
        const user=await User.findById(id);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        
        return res.status(200).json(user);
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:"Internal server error :",error:err.message});
    }   
};

module.exports.updateUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const {name, contact, bloodGroup, address, pincode, status}=req.body;
        const user=await User.findById(id);
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        if(name) user.name=name;
        if(contact) user.contact=contact;   
        if(bloodGroup) user.bloodGroup=bloodGroup;
        if(address) user.address=address;
        if(pincode) user.pincode=pincode;
        if(status) user.status=status;

        await user.save();
        return res.status(200).json({message:"User updated successfully",user});
    }  
    catch(err){
        console.error(err);
        res.status(500).json({message:"Internal server error :",error:err.message});
    }
};

