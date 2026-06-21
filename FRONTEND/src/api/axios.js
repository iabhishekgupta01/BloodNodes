import axios from "axios";
const BACKEND_URL=import.meta.env.BACKEND_URL || "http://localhost:5000";





const API = axios.create({
    baseURL: `${BACKEND_URL}/api`,
    
}); 

API.interceptors.request.use((config)=>{
    const token=localStorage.getItem("authToken");
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;

});

export default API;





