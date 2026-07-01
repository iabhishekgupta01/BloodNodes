import API from "./axios.js";

export const getAllBloodRequests = async () => {
    try {
        const response = await API.get("/blood-requests");
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Failed to fetch blood requests");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        console.error("Error fetching blood requests:", error);
        throw error;
    }
};

export const createBloodRequest = async (requestData) => {
    try {
        const formData = new FormData();
        for (const key in requestData) {

            if (key === "image" && requestData[key] instanceof File) {
                formData.append(key, requestData[key]);
            } else {
                formData.append(key, requestData[key]);
            }

        }
        const response = await API.post("/blood-requests", formData);
        if (response.status === 201) {
            return response.data;
        } else {
            throw new Error("Failed to create blood request");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        console.error("Error creating blood request:", error);
        throw error;
    }
};

export const getBloodRequestById = async (requestId) => {
    try {
        const response = await API.get(`/blood-requests/${requestId}`);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Failed to fetch blood request");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        console.error("Error fetching blood request:", error);
        throw error;
    }   
};

export const updateBloodRequest = async (requestId, requestData) => {
    try {
        const formData = new FormData();
        for (const key in requestData) {
            if (key === "image" && requestData[key] instanceof File) {
                formData.append(key, requestData[key]);
            } else {
                formData.append(key, requestData[key]);
            }
        }
        const response = await API.put(`/blood-requests/${requestId}`, formData);
        if (response.status === 200) {
            return response.data;
        }
        else {
            throw new Error("Failed to update blood request");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }   
        console.error("Error updating blood request:", error);
        throw error;
    }
};

export const deleteBloodRequest = async (requestId) => {
    try {
        const response = await API.delete(`/blood-requests/${requestId}`);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Failed to delete blood request");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }   
        console.error("Error deleting blood request:", error);
        throw error;
    }
};

export const acceptBloodRequest = async (requestId,userId) => {
    try {
        const response = await API.post(`/blood-requests/${requestId}/accept`, { userId });
        if (response.status === 200) {
            return response.data;
        }
        else {
            throw new Error("Failed to accept blood request");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        console.error("Error accepting blood request:", error);
        throw error;
    }
};

export const acceptDoner = async (requestId, userId) => {
    try {
        const response = await API.post(`/blood-requests/${requestId}/accept-doner`, { userId });
        if (response.status === 200) {
            return response.data;
        }
        else {
            throw new Error("Failed to accept doner for blood request");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        console.error("Error accepting doner for blood request:", error);
        throw error;
    }
};

export const cancelBloodRequest = async (requestId, userId) => {
    try {
        const response = await API.post(`/blood-requests/${requestId}/cancel`, { userId });
        if (response.status === 200) {
            return response.data;
        }
        else {
            throw new Error("Failed to cancel blood request");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        console.error("Error canceling blood request:", error);
        throw error;
    }
};

export const updateBloodStatus = async (requestId, statusData) => {
    try {
        const response = await API.put(`/blood-requests/${requestId}/status`, statusData);
        if (response.status === 200) {
            return response.data;
        }
        else {
            throw new Error("Failed to update blood request status");
        }
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            throw new Error(error.response.data.message);
        }
        console.error("Error updating blood request status:", error);
        throw error;
    }

};



