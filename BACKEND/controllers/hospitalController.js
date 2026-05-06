const Hospital = require('../models/Hospital.js');

exports.getAllHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find({});  
        if (hospitals.length === 0) {
            return res.status(404).json({ message: "No hospitals found" });
        }
        return res.status(200).json(hospitals);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};

exports.getHospitalById = async (req, res) => { 
    try {

        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Hospital ID is required" });
        }
        const hospital = await Hospital.findById(id);
        if (!hospital) {
            return res.status(404).json({ message: "Hospital not found" });
        }
        return res.status(200).json(hospital);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};

exports.updateHospital = async (req, res) => {
    try {
        const id=req.user.id;
        if (!id) {
            return res.status(400).json({ message: "Hospital ID is required" });
        }

        const hospital = await Hospital.findById(id);
        if (!hospital) {
            return res.status(404).json({ message: "Hospital not found" });
        }
        const { hospitalName, liscenseNumber, contact, address, pincode } = req.body;
        if (hospitalName) hospital.hospitalName = hospitalName;
        if (liscenseNumber) hospital.liscenseNumber = liscenseNumber;
        if (contact) hospital.contact = contact;
        if (address) hospital.address = address;
        if (pincode) hospital.pincode = pincode;
         
        await hospital.save();
        return res.status(200).json({ message: "Hospital updated successfully", hospital });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }       
};

exports.updateInventory = async (req, res) => {
    try {
        const id=req.user.id;
        if (!id) {
            return res.status(400).json({ message: "Hospital ID is required" });
        }
        const hospital = await Hospital.findById(id);
        if (!hospital) {
            return res.status(404).json({ message: "Hospital not found" });
        }   
        const { inventory } = req.body;
        if (inventory) hospital.inventory = inventory;
        hospital.lastUpdated = Date.now();
        await hospital.save();
        return res.status(200).json({ message: "Inventory updated successfully", hospital });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};

exports.inventoryReport = async (req, res) => {
    try {
        const id = req.user.id;
        if (!id) {
            return res.status(400).json({ message: "Hospital ID is required" });
        }
        const hospital = await Hospital.findById(id);   
        if (!hospital) {
            return res.status(404).json({ message: "Hospital not found" });
        }
        const inventory = hospital.inventory;
        return res.status(200).json({ inventory });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }   
};

exports.inventoryScan = async (req, res) =>{
    try {
        const id = req.user.id;
        if (!id) {
            return res.status(400).json({ message: "Hospital ID is required" });
        }
        const hospital = await Hospital.findById(id);
        if (!hospital) {
            return res.status(404).json({ message: "Hospital not found" });
        }

        const updatedInventory = req.AIresponse;

            if (!updatedInventory || typeof updatedInventory !== 'object'){
                return res.status(400).json({ message: "Invalid inventory data from AI" });
            }

        hospital.inventory = updatedInventory;
        hospital.lastUpdated = Date.now();
        
        await hospital.save();

        return res.status(200).json({ message: "Inventory updated successfully from AI scan", inventory: hospital.inventory });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }



}