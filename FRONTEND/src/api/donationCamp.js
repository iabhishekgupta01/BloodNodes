import API from './axios.js';

export const getAllDonationCamps = async () => {
    try {
        const response= await API.get("/donation-camps");
        if(response.status===200){
            return response.data;
        } else{
            throw new Error("Failed to fetch donation camps");
        }
    } catch (error) {
        if(error.response && error.response.data && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        console.error("Error fetching donation camps:", error);
        throw error;
    }
};

export const createCamp = async (campData) => {
    try{
        const formData = new FormData();    
        for (const key in campData) {
            if(key==="location" && typeof campData[key] === "object"){
                formData.append(key, JSON.stringify(campData[key]));
            }else{
            formData.append(key, campData[key]);
            }
        }

        const response= await API.post("/donation-camps", formData, );
        if(response.status===201){
            return response.data;
        } else{
            throw new Error("Failed to create donation camp");
        }
    }
    catch (error) {
        if(error.response && error.response.data && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        console.error("Error fetching donation camps:", error);
        throw error;
    }
};

export const getDonationCampById = async (campId) => {
    try {
        const response= await API.get(`/donation-camps/${campId}`);
        if(response.status===200){
            return response.data;
        } else{
            throw new Error("Failed to fetch donation camp");
        }
    }catch (error) {
        if(error.response && error.response.data && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        console.error("Error fetching donation camps:", error);
        throw error;
    }
};

export const updateDonationCamp = async (campId, campData) => {
    try{
        const formData = new FormData();
        for (const key in campData) {
            if(key==="location" && typeof campData[key] === "object"){
                formData.append(key, JSON.stringify(campData[key]));
            }else{
            formData.append(key, campData[key]);
            }
        }

        const response=await API.put(`/donation-camps/${campId}`, formData);
        if(response.status===200){
            return response.data;
        } else{
            throw new Error("Failed to update donation camp");
        }   
        
    }
    catch(error){
        if(error.response && error.response.data && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        console.error("Error updating donation camp:", error);
        throw error;
    }   
};

export const deleteDonationCamp = async (campId) => {
    try{
        const response=await API.delete(`/donation-camps/${campId}`);
        if(response.status===200){
            return response.data;
        } else{
            throw new Error("Failed to delete donation camp");
        }
    }
    catch(error){
        if(error.response && error.response.data && error.response.data.message){
            throw new Error(error.response.data.message);
        }
        console.error("Error deleting donation camp:", error);
        throw error;
    }   
};