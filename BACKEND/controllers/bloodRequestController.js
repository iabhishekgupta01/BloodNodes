const BloodRequest = require('../models/BloodRequest.js');
const User = require('../models/User.js');

exports.getAllBloodRequests = async (req, res) => {
    try {
        const bloodRequests = await BloodRequest.find({}).populate('hospital', 'hospitalName contact').populate('acceptedBy', 'name contact');
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
        const { bloodGroup, unitsNeeded, status, description } = req.body;
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
        const bloodRequest = await BloodRequest.findById(requestId)
                            .populate('hospital', 'hospitalName contact address pincode')
                            .populate('acceptedBy', 'name contact status pincode');
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


// In your backend controllers/bloodRequest.js

exports.acceptBloodRequest = async (req, res) => {
    try {
        const { requestId } = req.params;
        const { userId } = req.body;
        
        if (!requestId) {
            return res.status(400).json({ message: "Blood request ID is required" });
        }
        // FIX 1: Make sure userId is actually provided
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        
        const bloodRequest = await BloodRequest.findById(requestId);
        if (!bloodRequest) {
            return res.status(404).json({ message: "Blood request not found" });
        }
        
        if(bloodRequest.acceptedBy.length > bloodRequest.unitsNeeded){
            return res.status(400).json({ message: "Blood request already fulfilled" });
        }
        
        // FIX 2: Safely check id and userId before calling toString()
        const hasAccepted = bloodRequest.acceptedBy.some(id => 
            id && userId && id.toString() === userId.toString()
        );

        if(hasAccepted){
            return res.status(400).json({ message: "User has already accepted this blood request" });
        }

        if(req.user.id !== userId && bloodRequest.hospital.toString() !== req.user.id && req.user.role == "user"){
            return res.status(403).json({ message: "Unauthorized" });
        }

        bloodRequest.acceptedBy.push(userId);
        await bloodRequest.save();
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if(user.status === "donating"){
            return res.status(400).json({ message: "User is already donating" });
        }
        user.acceptedRequests.push(requestId);
        user.status = "donating";
        await user.save();
        return res.status(200).json({ message: "Blood request accepted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }   
};

exports.cancelBloodRequest = async (req, res) => {
    try {
        const { requestId } = req.params;
        const { userId } = req.body;

        if (!requestId) return res.status(400).json({ message: "Blood request ID is required" });
        if (!userId) return res.status(400).json({ message: "User ID is required" });

        const bloodRequest = await BloodRequest.findById(requestId);
        if (!bloodRequest) return res.status(404).json({ message: "Blood request not found" });

        // FIX 2: Safely check id and userId before calling toString()
        const hasAccepted = bloodRequest.acceptedBy.some(id => 
            id && userId && id.toString() === userId.toString()
        );

        if (!hasAccepted) {
            return res.status(400).json({ message: "User has not accepted this blood request" });
        }

        // Safely filter out the user, ignoring nulls
        bloodRequest.acceptedBy = bloodRequest.acceptedBy.filter(id => 
            id && id.toString() !== userId.toString()
        );
        
        await bloodRequest.save();

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });
        user.acceptedRequests = user.acceptedRequests.filter(id => 
            id && id.toString() !== requestId.toString()
        );
        user.status = "available";
        await user.save();
        return res.status(200).json({ message: "Blood request canceled successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};

exports.updateBloodStatus = async (req, res) => {
    try {
        const { requestId } = req.params;
        const { status } = req.body;

        if (!requestId) return res.status(400).json({ message: "Blood request ID is required" });
        if (!status) return res.status(400).json({ message: "Status is required" });

        const bloodRequest = await BloodRequest.findById(requestId);
        if (!bloodRequest) return res.status(404).json({ message: "Blood request not found" });

        bloodRequest.status = status;
        await bloodRequest.save();
        return res.status(200).json({ message: "Blood request status updated successfully", bloodRequest });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error :", error: err.message });
    }
};