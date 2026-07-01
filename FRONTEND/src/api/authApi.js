
import API from './axios.js';

export const login = async (email, password) => {   
    try {
        const response = await API.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Network error");
    }
};

export const registerUser= async (userData)=>{
    try {
        const response = await API.post('/auth/register-user', userData);
        return { message: response.data.message ,status:response.status};
    } catch (error) {
        return { message: error.response ? error.response.data.message : "Network error", status: error.response ? error.response.status : 500 };
    }


}
export const getUserProfile = async (userId) => {
    try {
        const response = await API.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error("Network error");
    }
};


export const registerHospital= async (hospitalData)=>{
    try {
        const response = await API.post('/auth/register-hospital', hospitalData);   
        return { message: response.data.message ,status:response.status};
    } catch (error) {
        return { message: error.response ? error.response.data.message : "Network error", status: error.response ? error.response.status : 500 };
    }

};