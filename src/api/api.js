import axios from "axios";

const api = axios.create({
    baseURL : 'https://backend-91y0.onrender.com',
    withCredentials: true,
})

export default api
