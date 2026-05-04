const User = require('../models/User.js');
const Hospital = require('../models/Hospital.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "my_jwt_secret_key";


module.exports.registerUser = async (req, res) => {

    try {
        const { name, email, phone, password, bloodGroup, address, pincode } = req.body;
        if (!name || !email || !phone || !password || !bloodGroup || !address || !pincode) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const existingUser = await User.findOne({ "contact.email": email });

        if (existingUser) {
            return res.status(400).json({ message: "User with this email or number already exists...!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            name: name,
            contact: {
                email: email,
                phone: phone
            },
            password: hashedPassword,
            bloodGroup: bloodGroup,
            address: address,
            pincode: pincode
        });

        await user.save();
        return res.status(201).json({ message: "User registered successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};

module.exports.registerHospital = async (req, res) => {
    try {
        const { hospitalName, liscenseNumber, email, phone, password, address, pincode } = req.body;
        if (!hospitalName || !liscenseNumber || !email || !phone || !password || !address || !pincode) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingHospital = await Hospital.findOne({ "contact.email": email });

        if (existingHospital) {
            return res.status(400).json({ message: "Hospital with this email or number already exists...!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const hospital = new Hospital({
            hospitalName: hospitalName,
            liscenseNumber: liscenseNumber,
            contact: {
                email: email,
                phone: phone
            },
            password: hashedPassword,
            address: address,
            pincode: pincode
        });

        await hospital.save();
        return res.status(201).json({ message: "Hospital registered successfully" });
    }

    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }

};

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }   
        const user= await User.findOne({ "contact.email": email });
        const hospital= await Hospital.findOne({ "contact.email": email });

        if (!user && !hospital) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch=user? await bcrypt.compare(password,user.password): await bcrypt.compare(password,hospital.password);

        if(!isMatch){
            return res.status(400).json({ message: "Invalid or incorrect password" });
        }

        const payload={
            id: user? user._id : hospital._id,
            role: user? "user" : "hospital"
        };

        const token=jwt.sign(payload,JWT_SECRET,{ expiresIn: '90d' });

        return res.status(200).json({message:"Login successful", token:token, role:payload.role,id:payload.id});
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });   
    }
};

module.exports.logoutUser = async (req, res) => {
    try {
        return res.status(200).json({ message: " Please delete the token on the client side." });
    }   
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });   
    }   
};




        

    
