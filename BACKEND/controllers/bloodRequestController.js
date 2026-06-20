const BloodRequest = require('../models/BloodRequest.js');

exports.getAllBloodRequests = async (req, res) => {
    try {
        const bloodRequests = await BloodRequest.find({}).populate('hospital', 'hospitalName contact');
        if (bloodRequests.length === 0) {
            return res.status(404).json({ message: "No blood requests found" });
        }
        return res.status(200).json(bloodRequests);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }   
};

exports.createBloodRequest = async (req, res) => {
    try {
        const { bloodGroup, unitsNeeded, status, description,image } = req.body;
        if (!bloodGroup || !unitsNeeded) {
            return res.status(400).json({ message: "Blood group and units needed are required" });
        }



        const imageUrl = req.file ? req.file.path : "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop";

        const bloodRequest = new BloodRequest({
            hospital: req.user.id,
            bloodGroup,
            unitsNeeded,
            status,
            description,
            image:imageUrl
        });
        await bloodRequest.save();
        return res.status(201).json({ message: "Blood request created successfully", bloodRequest });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }   
};

exports.getBloodRequestById = async (req, res) => {

    try {
        const { requestId } = req.params;
        if (!requestId) {
            return res.status(400).json({ message: "Blood request ID is required" });
        }
        const bloodRequest = await BloodRequest.findById(requestId).populate('hospital', 'hospitalName contact');
        if (!bloodRequest) {
            return res.status(404).json({ message: "Blood request not found" });
        }
        return res.status(200).json(bloodRequest);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }   
};

exports.updateBloodRequest = async (req, res) => {
    try {
        const { requestId } = req.params;
        if (!requestId) {
            return res.status(400).json({ message: "Blood request ID is required" });
        }
        const bloodRequest = await BloodRequest.findById(requestId);
        if (!bloodRequest) {
            return res.status(404).json({ message: "Blood request not found" });
        }

        // if(bloodRequest.hospital.toString() !== req.user.id){
        //     return res.status(403).json({ message: "Unauthorized" });
        // }

        const {status, acceptedBy, unitsFulfilled } = req.body;
        if (status) bloodRequest.status = status;
        if(unitsFulfilled) bloodRequest.unitsFulfilled = unitsFulfilled;
        if(acceptedBy){
            if(bloodRequest.acceptedBy.length<=0 || !bloodRequest.acceptedBy.includes(acceptedBy)){
                bloodRequest.acceptedBy.push(acceptedBy);
            }

        }
        await bloodRequest.save();
        return res.status(200).json({ message: "Blood request updated successfully", bloodRequest });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};

exports.deleteBloodRequest = async (req, res) => {
    try {
        const { requestId } = req.params;
        if (!requestId) {
            return res.status(400).json({ message: "Blood request ID is required" });
        }
        const bloodRequest = await BloodRequest.findById(requestId);
        if (!bloodRequest) {
            return res.status(404).json({ message: "Blood request not found" });
        }

        if(bloodRequest.hospital.toString() !== req.user.id){
            return res.status(403).json({ message: "Unauthorized" });
        }


        await BloodRequest.findByIdAndDelete(requestId);
        return res.status(200).json({ message: "Blood request deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }       
};
