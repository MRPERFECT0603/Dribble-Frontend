import axios from "axios";

export const makeRequest = axios.create({
    // baseURL: "http://localhost:8000/api",
    baseURL: "https://dribble-backend-hnls.onrender.com/api",
    withCredentials: true,
});