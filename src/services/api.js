import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-cibersummary.onrender.com',  
    timeout: 60000,
    headers: {'Content-Type': 'application/json'}
});

export default api;