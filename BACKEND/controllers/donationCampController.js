const DonationCamp = require('../models/DonationCamp.js');

exports.getAllDonationCamps = async (req, res) => {
    try {
        const donationCamps = await DonationCamp.find({}).populate('organizerId', 'hospitalName contact'); 
        if (donationCamps.length === 0) {
            return res.status(404).json({ message: "No donation camps found" });
        }
        return res.status(200).json(donationCamps);
    } catch (err) {     
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};

exports.createDonationCamp = async (req, res) => {      
    try {
        const { campName, date, location, time, description } = req.body;
        if (!campName || !date || !location || !time) {
            return res.status(400).json({ message: "Camp name, date and location are required" });
        }
        const organizerValue = req.user.role === 'hospital' ? 'Hospital' : 'User';
        const donationCamp = new DonationCamp({
            organizerId: req.user.id,
            organizer: organizerValue,
            campName,
            date,
            location,
            time,
            description
        });
        await donationCamp.save();
        return res.status(201).json({ message: "Donation camp created successfully", donationCamp });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }   
};

exports.getDonationCampById = async (req, res) => {
    try {
        const { campId } = req.params;
        if (!campId) {
            return res.status(400).json({ message: "Donation camp ID is required" });
        }
        const donationCamp = await DonationCamp.findById(campId).populate('organizerId', 'hospitalName contact');
        if (!donationCamp) {
            return res.status(404).json({ message: "Donation camp not found" });
        }
        return res.status(200).json(donationCamp);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};

exports.updateDonationCamp = async (req, res) => {
    try {
        const { campId } = req.params;
        if (!campId) {
            return res.status(400).json({ message: "Donation camp ID is required" });
        }
        const donationCamp = await DonationCamp.findById(campId);
        if (!donationCamp) {
            return res.status(404).json({ message: "Donation camp not found" });
        }
        if (donationCamp.organizerId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized to update this donation camp" });
        }
        const { campName, date, location, time, description } = req.body;
        if (campName) donationCamp.campName = campName;
        if (date) donationCamp.date = date;
        if (location) donationCamp.location = location;
        if (time) donationCamp.time = time;
        if (description) donationCamp.description = description;
        await donationCamp.save();
        return res.status(200).json({ message: "Donation camp updated successfully", donationCamp });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }   
};

exports.deleteDonationCamp = async (req, res) => {  
    try {
        const { campId } = req.params;
        if (!campId) {
            return res.status(400).json({ message: "Donation camp ID is required" });
        }
        const donationCamp = await DonationCamp.findById(campId);
        if (!donationCamp) {
            return res.status(404).json({ message: "Donation camp not found" });
        }
        if (donationCamp.organizerId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Unauthorized to delete this donation camp" });
        }
        await donationCamp.deleteOne();
        return res.status(200).json({ message: "Donation camp deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};

