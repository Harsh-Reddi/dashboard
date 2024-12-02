import axios from "axios";

const api = axios.create({
    baseURL : 'https://backend-91y0.onrender.com/api',
    // baseURL : 'http://localhost:5000',
    withCredentials: true,
})

export default api
