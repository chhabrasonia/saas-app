import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "x-api-secret": process.env.NEXT_PUBLIC_BACKEND_API_SECRET
    },
});


export default api;
