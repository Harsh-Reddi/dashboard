import axios from "axios";

const api = axios.create({
    baseURL : 'https://backend-n789.onrender.com/api'
})

export default api
