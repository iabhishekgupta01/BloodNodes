import axios from "axios";

const API_URL = "http://localhost:5000";

const API = axios.create({
    baseURL: `${API_URL}/api`,
    
}); 

API.interceptors.request.use((config)=>{
    const token=localStorage.getItem("authToken");
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;

});

export default API;





