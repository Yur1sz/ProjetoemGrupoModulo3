import axios from "axios";

const API = axios.create({
    baseURL: "https://json-server-m3-8rj7.onrender.com"
})

export default API