import axios from "axios";
const BACKEND_URL=import.meta.env.BACKEND_URL
console.log("Backend URL: ", BACKEND_URL);

const TEMP_URL="http://localhost:5000" || BACKEND_URL;



const API = axios.create({
    baseURL: `${TEMP_URL}/api`,
    
}); 

API.interceptors.request.use((config)=>{
    const token=localStorage.getItem("authToken");
    if(token){
        config.headers.Authorization=`Bearer ${token}`;
    }
    return config;

});

export default API;





