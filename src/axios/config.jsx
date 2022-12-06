import axios from "axios";

const fetch = axios.create({
    baseURL: "https://json-server-m3-8rj7.onrender.com"
})

export default fetch